import { createHmac } from 'crypto';

export interface ShareTokenPayload {
  sheetId: string;
  rowIds: string[];
  clientId: string;
  expiresAt: number;
}

export const createPortalSlug = (companyName: string, clientName: string): string => {
  const parts = `${companyName}-${clientName}`
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-');

  return parts.replace(/^-+|-+$/g, '').slice(0, 48) || 'client';
};

export const buildClientPortalUrl = (slug: string, origin = 'https://portal0.run'): string => {
  const sanitizedOrigin = origin.endsWith('/') ? origin.slice(0, -1) : origin;
  const sanitizedSlug = slug.replace(/[^a-z0-9-]/g, '');
  return `${sanitizedOrigin}/${sanitizedSlug}`;
};

export const generateShareToken = (
  partialPayload: Omit<ShareTokenPayload, 'expiresAt'>,
  secret: string,
  expiresInSeconds = 3600
): { token: string; payload: ShareTokenPayload } => {
  if (!secret) {
    throw new Error('Missing signing secret for share token generation');
  }

  const payload: ShareTokenPayload = {
    ...partialPayload,
    expiresAt: Date.now() + expiresInSeconds * 1000,
  };

  const serializedPayload = JSON.stringify(payload);
  const signature = createHmac('sha256', secret).update(serializedPayload).digest('base64url');

  return {
    token: Buffer.from(serializedPayload).toString('base64url') + '.' + signature,
    payload,
  };
};

export const verifyShareToken = (token: string, secret: string): ShareTokenPayload | null => {
  const [encodedPayload, providedSignature] = token.split('.');
  if (!encodedPayload || !providedSignature) {
    return null;
  }

  const payloadString = Buffer.from(encodedPayload, 'base64url').toString('utf8');
  const expectedSignature = createHmac('sha256', secret).update(payloadString).digest('base64url');

  if (providedSignature !== expectedSignature) {
    return null;
  }

  const payload: ShareTokenPayload = JSON.parse(payloadString);
  if (payload.expiresAt < Date.now()) {
    return null;
  }

  return payload;
};
