import { createCipheriv, createDecipheriv, createHash, randomBytes } from 'crypto';

const ALGORITHM = 'aes-256-gcm';
const IV_LENGTH = 12;
const AUTH_TAG_LENGTH = 16;

export interface EncryptedPayload {
  iv: string;
  authTag: string;
  ciphertext: string;
}

export const deriveRecordKey = (projectSecret: string, recordId: string): Buffer => {
  if (!projectSecret) {
    throw new Error('projectSecret is required to derive record keys');
  }

  return createHash('sha256').update(projectSecret + recordId).digest();
};

export const encryptPayload = (recordKey: Buffer, payload: unknown): EncryptedPayload => {
  const iv = randomBytes(IV_LENGTH);
  const cipher = createCipheriv(ALGORITHM, recordKey, iv, { authTagLength: AUTH_TAG_LENGTH });
  const serialized = JSON.stringify(payload);
  const ciphertext = Buffer.concat([cipher.update(serialized, 'utf8'), cipher.final()]);
  const authTag = cipher.getAuthTag();

  return {
    iv: iv.toString('base64'),
    authTag: authTag.toString('base64'),
    ciphertext: ciphertext.toString('base64'),
  };
};

export const decryptPayload = (recordKey: Buffer, encrypted: EncryptedPayload): unknown => {
  const decipher = createDecipheriv(ALGORITHM, recordKey, Buffer.from(encrypted.iv, 'base64'), {
    authTagLength: AUTH_TAG_LENGTH,
  });
  decipher.setAuthTag(Buffer.from(encrypted.authTag, 'base64'));
  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(encrypted.ciphertext, 'base64')),
    decipher.final(),
  ]);

  return JSON.parse(decrypted.toString('utf8'));
};
