import { randomUUID } from 'crypto';
import type { RecordOfUnknown } from './types';

export interface AuditEvent {
  id: string;
  actorId: string;
  action: 'share' | 'unshare' | 'view' | 'download' | 'payment' | 'config-change';
  target: string;
  metadata?: RecordOfUnknown;
  occurredAt: Date;
}

export const maskSensitiveValue = (value: string, visibleChars = 4): string => {
  if (!value) {
    return '';
  }

  const suffix = value.slice(-visibleChars);
  return suffix.padStart(value.length, '*');
};

export const redactRowSnapshot = (row: RecordOfUnknown, allowedFields: string[]): RecordOfUnknown => {
  return Object.entries(row).reduce<RecordOfUnknown>((acc, [key, value]) => {
    acc[key] = allowedFields.includes(key) ? value : '[REDACTED]';
    return acc;
  }, {});
};

export const logAuditEvent = (
  pushEvent: (event: AuditEvent) => void,
  event: Omit<AuditEvent, 'id' | 'occurredAt'>
): AuditEvent => {
  const payload: AuditEvent = {
    ...event,
    id: `audit_${randomUUID()}`,
    occurredAt: new Date(),
  };

  pushEvent(payload);
  return payload;
};
