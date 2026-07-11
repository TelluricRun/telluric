import type { UsageEvent } from './types';

export interface FlowEvent extends UsageEvent {
  flowId: 'create-portal' | 'share-update' | 'collect-payment';
}

export interface FlowFunnel {
  flowId: FlowEvent['flowId'];
  steps: string[];
}

export const groupEventsByFlow = (events: FlowEvent[]): Record<string, FlowEvent[]> => {
  return events.reduce<Record<string, FlowEvent[]>>((acc, event) => {
    acc[event.flowId] = acc[event.flowId] ?? [];
    acc[event.flowId].push(event);
    return acc;
  }, {});
};

export const calculateFlowCompletion = (funnel: FlowFunnel, events: FlowEvent[]): number => {
  const flowEvents = events.filter((event) => event.flowId === funnel.flowId);
  if (flowEvents.length === 0 || funnel.steps.length === 0) {
    return 0;
  }

  const completedSteps = new Set<string>(flowEvents.map((event) => event.type));
  const ratio = funnel.steps.filter((step) => completedSteps.has(step as string)).length / funnel.steps.length;
  return Number((ratio * 100).toFixed(2));
};
