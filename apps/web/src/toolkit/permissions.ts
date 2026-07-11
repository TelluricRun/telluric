import type { RecordOfUnknown } from './types';

export type PermissionLevel = 'none' | 'read' | 'comment' | 'edit';

export interface ShareRule {
  clientId: string;
  level: PermissionLevel;
  rowPredicate: (row: RecordOfUnknown) => boolean;
}

export interface RowShareEntry {
  rowId: string;
  grants: Record<string, PermissionLevel>;
}

const permissionWeight: Record<PermissionLevel, number> = {
  none: 0,
  read: 1,
  comment: 2,
  edit: 3,
};

export const resolvePermissionLevel = (levels: PermissionLevel[]): PermissionLevel => {
  return levels.reduce<PermissionLevel>((highest, current) => {
    return permissionWeight[current] > permissionWeight[highest] ? current : highest;
  }, 'none');
};

export const buildRowShareMatrix = (
  rows: RecordOfUnknown[],
  rules: ShareRule[],
  rowIdAccessor: (row: RecordOfUnknown) => string
): RowShareEntry[] => {
  return rows.map((row) => {
    const rowId = rowIdAccessor(row);

    const grants = rules.reduce<Record<string, PermissionLevel>>((acc, rule) => {
      if (rule.rowPredicate(row)) {
        const previousLevel = acc[rule.clientId] ?? 'none';
        acc[rule.clientId] = resolvePermissionLevel([previousLevel, rule.level]);
      }
      return acc;
    }, {});

    return { rowId, grants };
  });
};

export const canAccessRow = (
  matrix: RowShareEntry[],
  clientId: string,
  rowId: string,
  requiredLevel: PermissionLevel
): boolean => {
  const entry = matrix.find((candidate) => candidate.rowId === rowId);
  if (!entry) {
    return false;
  }

  const grantedLevel = entry.grants[clientId] ?? 'none';
  return permissionWeight[grantedLevel] >= permissionWeight[requiredLevel];
};
