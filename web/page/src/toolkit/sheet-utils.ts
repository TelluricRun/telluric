import type { RecordOfUnknown } from '@/toolkit/types';

export type ColumnType = 'string' | 'number' | 'boolean' | 'date' | 'currency' | 'unknown';

export interface ColumnSchema {
  id: string;
  header: string;
  sanitizedHeader: string;
  type: ColumnType;
  isHidden: boolean;
}

export interface SchemaInferenceOptions {
  sampleSize?: number;
  hiddenHeaders?: Set<string>;
}

const DEFAULT_SAMPLE_SIZE = 50;

const currencyRegex = /^\$?\s?-?\d{1,3}(,?\d{3})*(\.\d+)?$/;

export const sanitizeHeader = (header: string): string => {
  return header.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$|-{2,}/g, '-');
};

const inferColumnType = (value: unknown): ColumnType => {
  if (value === null || value === undefined) {
    return 'unknown';
  }

  if (typeof value === 'number' && !Number.isNaN(value)) {
    return 'number';
  }

  if (typeof value === 'boolean') {
    return 'boolean';
  }

  if (typeof value === 'string') {
    const trimmed = value.trim();

    if (trimmed.length === 0) {
      return 'string';
    }

    const dateValue = Date.parse(trimmed);
    if (!Number.isNaN(dateValue)) {
      return 'date';
    }

    if (currencyRegex.test(trimmed)) {
      return 'currency';
    }

    if (trimmed === 'true' || trimmed === 'false') {
      return 'boolean';
    }

    const numericValue = Number(trimmed);
    if (!Number.isNaN(numericValue)) {
      return 'number';
    }

    return 'string';
  }

  return 'unknown';
};

const promoteColumnType = (current: ColumnType, candidate: ColumnType): ColumnType => {
  if (current === candidate) {
    return current;
  }

  const precedence: ColumnType[] = ['unknown', 'boolean', 'number', 'currency', 'date', 'string'];
  return precedence.indexOf(candidate) > precedence.indexOf(current) ? candidate : current;
};

export const inferColumnSchema = (
  rows: RecordOfUnknown[] = [],
  options: SchemaInferenceOptions = {}
): ColumnSchema[] => {
  const sampleSize = options.sampleSize ?? DEFAULT_SAMPLE_SIZE;
  const hiddenHeaders = options.hiddenHeaders ?? new Set<string>();
  const sampleRows = rows.slice(0, sampleSize);
  const headers = new Set<string>();

  sampleRows.forEach((row) => {
    Object.keys(row).forEach((header) => headers.add(header));
  });

  return Array.from(headers).map((header, index) => {
    let type: ColumnType = 'unknown';

    sampleRows.forEach((row) => {
      type = promoteColumnType(type, inferColumnType(row[header]));
    });

    return {
      id: `col_${index + 1}`,
      header,
      sanitizedHeader: sanitizeHeader(header),
      type,
      isHidden: hiddenHeaders.has(header),
    };
  });
};

export const extractVisibleColumns = (schema: ColumnSchema[]): ColumnSchema[] => {
  return schema.filter((column) => !column.isHidden);
};

export const buildShadowIdMap = (schema: ColumnSchema[]): Map<string, string> => {
  return new Map(schema.map((column, index) => [column.header, `shadow_${index + 1}_${column.sanitizedHeader}`]));
};

export const mapRowToShadowIds = (row: RecordOfUnknown, shadowMap: Map<string, string>): RecordOfUnknown => {
  return Object.entries(row).reduce<RecordOfUnknown>((acc, [header, value]) => {
    const shadowKey = shadowMap.get(header) ?? header;
    acc[shadowKey] = value;
    return acc;
  }, {});
};
