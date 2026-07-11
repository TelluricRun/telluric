import type { RecordOfUnknown } from './types';

export type AnalyticsEvent = {
  id?: string;
  name: string;
  properties?: RecordOfUnknown;
  timestamp?: string;
};

export interface AnalyticsTransport {
  track: (event: AnalyticsEvent) => Promise<void>;
}

// simple in-memory transport for dev
class InMemoryTransport implements AnalyticsTransport {
  public events: AnalyticsEvent[] = [];
  async track(event: AnalyticsEvent) {
    this.events.push({ ...event, timestamp: new Date().toISOString() });
  }
}

let transport: AnalyticsTransport = new InMemoryTransport();

export const configureAnalytics = (t: AnalyticsTransport) => {
  transport = t;
};

export const trackEvent = async (name: string, properties?: RecordOfUnknown) => {
  const event: AnalyticsEvent = {
    id: `evt_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    name,
    properties,
    timestamp: new Date().toISOString(),
  };

  try {
    await transport.track(event);
  } catch (err) {
    // swallow errors; analytics must not break flows
  }
};

export const identifyUser = async (userId: string, traits?: RecordOfUnknown) => {
  await trackEvent('identify', { userId, traits });
};
