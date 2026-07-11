import path from 'path';
import fs from 'fs';
import type { RecordOfUnknown } from './types';

export interface BrandingConfig {
  name?: string;
  logoUrl?: string; // remote or CDN path
  faviconUrl?: string;
  accentColor?: string;
  cssUrl?: string; // optional custom stylesheet
  assets?: Record<string, string>;
}

export const mergeBranding = (base: BrandingConfig, override?: Partial<BrandingConfig>): BrandingConfig => {
  return { ...base, ...(override ?? {}) };
};

export const loadLocalAssets = (assetsDir: string): Record<string, string> => {
  try {
    const resolved = path.resolve(assetsDir);
    if (!fs.existsSync(resolved)) return {};
    const files = fs.readdirSync(resolved);
    return files.reduce<Record<string, string>>((acc, fname) => {
      acc[fname] = `/assets/${encodeURIComponent(fname)}`;
      return acc;
    }, {});
  } catch (err) {
    return {};
  }
};

export const normalizeBrandingForClient = (cfg: BrandingConfig): RecordOfUnknown => {
  return {
    name: cfg.name ?? 'Portal0',
    logoUrl: cfg.logoUrl ?? null,
    faviconUrl: cfg.faviconUrl ?? null,
    accentColor: cfg.accentColor ?? '#2054c1',
    cssUrl: cfg.cssUrl ?? null,
    assets: cfg.assets ?? {},
  };
};
