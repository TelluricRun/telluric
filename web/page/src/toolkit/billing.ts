import type { PlanDescriptor, PricingConfig, UsageEvent, UsageStats } from './types';

export interface ChargeBreakdown {
  base: number;
  overage: number;
  subtotal: number;
}

export const calculateUsageCharges = (events: UsageEvent[], config: PricingConfig): ChargeBreakdown => {
  const totalUnits = events.reduce((sum, event) => sum + event.quantity, 0);
  const includedUnits = config.includedUnits ?? 0;
  const billableUnits = Math.max(totalUnits - includedUnits, 0);
  const overageRate = (config.overageMultiplier ?? 1) * config.unitPrice;

  const overage = Number((billableUnits * overageRate).toFixed(2));
  const base = Number((config.basePrice ?? 0).toFixed(2));

  return {
    base,
    overage,
    subtotal: Number((base + overage).toFixed(2)),
  };
};

export const shouldAutoUpgradePlan = (
  stats: UsageStats,
  currentPlan: PlanDescriptor,
  catalog: PlanDescriptor[]
): PlanDescriptor | null => {
  if (stats.monthlyRowsSynced <= currentPlan.maxRows && stats.activePortals <= currentPlan.maxPortals) {
    return null;
  }

  const sortedCatalog = catalog.sort((a, b) => a.price - b.price);
  return (
    sortedCatalog.find(
      (plan) => stats.monthlyRowsSynced <= plan.maxRows && stats.activePortals <= plan.maxPortals
    ) ?? null
  );
};

export interface InvoiceLineItem {
  description: string;
  amount: number;
  quantity?: number;
}

export const formatInvoiceLineItems = (charges: ChargeBreakdown, events: UsageEvent[]): InvoiceLineItem[] => {
  const baseLine: InvoiceLineItem = {
    description: 'Base subscription',
    amount: charges.base,
  };

  const overageLine: InvoiceLineItem | null = charges.overage
    ? {
        description: 'Usage overage',
        amount: charges.overage,
        quantity: events.reduce((sum, event) => sum + event.quantity, 0),
      }
    : null;

  return [baseLine, ...(overageLine ? [overageLine] : [])];
};
