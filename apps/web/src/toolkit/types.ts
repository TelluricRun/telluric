export type RecordOfUnknown = Record<string, unknown>;

export interface UsageEvent {
  id: string;
  type: 'portal-view' | 'row-sync' | 'attachment-download' | 'api-call';
  quantity: number;
  occurredAt: Date;
}

export interface PricingConfig {
  basePrice: number;
  includedUnits: number;
  unitPrice: number;
  overageMultiplier?: number;
}

export interface UsageStats {
  monthlyRowsSynced: number;
  activePortals: number;
  seats: number;
}

export interface PlanDescriptor {
  id: string;
  maxRows: number;
  maxPortals: number;
  price: number;
}
