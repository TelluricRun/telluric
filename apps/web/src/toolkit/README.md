Toolbox for Portal0 addon + backend helpers

This folder contains small, focused utilities meant to accelerate building the addon and server-side integrations.

Modules added:

- `sheet-utils.ts` — column/schema helpers and shadow-id mapping.
- `portal.ts` — slug builder, portal URL, and share token generators/verifiers.
- `permissions.ts` — permission resolution and row share matrix builder.
- `security.ts` — AES-GCM encryption helpers and key derivation.
- `billing.ts` — usage charge computation and invoice line formatting.
- `audit.ts` — simple audit event helpers and masking utilities.
- `onboarding.ts` — onboarding checklist builder and next-step resolver.
- `usage.ts` — flow grouping and simple funnel completion utilities.
- `notifications.tsx` — React `ToastProvider` and `useToast` hook for client-side toasts.
- `logs.ts` — minimal file-backed logger for server environments (falls back silently if unavailable).
- `analytics.ts` — pluggable analytics transport and tracking helpers.
- `branding.ts` — mergeable branding config helpers and asset loader.
- `domains.ts` — custom domain validation and DNS instruction generator.
- `templating.ts` — tiny, safe templating engine with partials and helpers.

Usage notes:
- The `ToastProvider` is a client-side React provider — wrap your app and call `useToast()` to push toasts.
- `logs.createLogger(namespace)` returns a simple logger that writes to `logs/YYYY-MM-DD.log` when `fs` is available.
- `analytics.configureAnalytics(transport)` allows plugging transports for Segment/Datadog/etc.
- `templating.renderTemplate(template, ctx, { partials, helpers })` is intentionally minimal and safe; use for rendering small portal pages or email bodies.

Security notes:
- Cryptographic helpers use Node's `crypto` and expect server-side usage.
- `generateShareToken` in `portal.ts` uses HMAC-SHA256; keep signing secrets secure.

Next steps you may want:
- Add unit tests for `templating`, `security`, and `billing`.
- Provide async transports for `analytics` that forward events to an external service.
- Add React Storybook stories for `ToastProvider` to verify styling and accessibility.
