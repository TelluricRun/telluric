import React, { useMemo, useState } from 'react';
import styles from './pricing-toggle.module.css';
import { Button } from '@/components/ui/button';
import { IconGift, IconRocket, IconBriefcase, IconShield, IconArrowRight } from '@/components/ui/icons';
import { Title } from '@/components/ui/title';

type Tier = {
  id: string;
  name: string;
  monthly?: number | null; // in USD; null/undefined for custom pricing
  custom?: boolean;
  features: string[];
  audience?: string;
};

const TIERS: Tier[] = [
  { id: 'free', name: 'Free', monthly: 0, features: ['1 portal', '100 views/month'], audience: 'Individuals' },
  { id: 'pro', name: 'Pro', monthly: 49, features: ['10 portals', '10,000 views/month', '1GB storage', 'Basic templates', 'Email support'], audience: 'Small teams & freelancers' },
  { id: 'agency', name: 'Agency', monthly: 149, features: ['50 portals', '50,000 views/month', '5GB storage', 'Advanced templates', 'Premium support', 'Custom branding', 'Webhooks & integrations', 'AI field mapping'], audience: 'Agencies & consultancies' },
  { id: 'enterprise', name: 'Enterprise', monthly: null, custom: true, features: ['Unlimited portals', 'Unlimited views/month', 'Unlimited storage', 'Custom templates & integrations', 'SAML', 'SLAs', 'Dedicated onboarding', 'SSO', 'Audit logs'], audience: 'Large organizations & enterprises' },
];

const formatMoney = (v?: number | null) => (typeof v === 'number' ? `$${v}` : '$0');

const PricingToggle: React.FC = () => {
  const [yearly, setYearly] = useState(false);

  const tiers = useMemo(() => {
    return TIERS.map(t => {
      // custom pricing (enterprise)
      if (t.custom) {
        return { ...t, display: 'Custom' };
      }

      // monthly label: for free tier show only $0 (no '/ month')
      const monthlyLabel = (t.monthly === 0) ? formatMoney(t.monthly) : `${formatMoney(t.monthly)} / month`;

      if (!yearly) return { ...t, display: monthlyLabel };

      // yearly price equals 10 months for non-custom tiers
      const yearlyTotal = Math.round((t.monthly || 0) * 10);
      const perMonthEquivalent = Math.round((yearlyTotal / 12) * 100) / 100;
      // for free tier yearlyTotal === 0 -> show only $0
      const yearlyLabel = (yearlyTotal === 0)
        ? formatMoney(yearlyTotal)
        : `${formatMoney(yearlyTotal)} / year`;
      return { ...t, display: yearlyLabel };
    });
  }, [yearly]);

  return (
      <div className={styles.fullWidthWrapper}>
        <section className={styles.wrapper} aria-label="Pricing">
      <div className={styles.titleSection}>
        <Title render={() => <h2>Pricing</h2>} />
        <h4 className={styles.titleSubtitle}>Choose a plan that fits your agency or team — scale portals, branding, and support as you grow.</h4>
      </div>

      <div className={styles.toggleRow}>
        <span>Monthly</span>
        <div
          role="switch"
          aria-checked={yearly}
          tabIndex={0}
          className={styles.switch}
          onClick={() => setYearly(v => !v)}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setYearly(v => !v); } }}
        >
          <div className={`${styles.knob} ${yearly ? styles.knobYearly : ''}`} />
        </div>
        <span>Yearly (2 months free)</span>
      </div>

      <div className={styles.plans}>
        {tiers.map((t: any) => (
          <div key={t.id} className={styles.card}>
            <div className={styles.cardIcon}>
              {t.id === 'free' && <IconGift size={'45px'} color={ 'var(--glacier)' } />}
              {t.id === 'pro' && <IconRocket size={'45px'} color={ 'var(--glacier)' } />}
              {t.id === 'agency' && <IconBriefcase size={'45px'} color={ 'var(--glacier)' } />}
              {t.id === 'enterprise' && <IconShield size={'45px'} color={ 'var(--glacier)' } />}
            </div>
            <div>
              <div className={styles.cardHeader}>{t.name}</div>
              <div className={styles.price}>{t.display}</div>
              {/* keep meta div in DOM; show empty space for Free or Enterprise */}
              <div className={styles.meta}>{(t.custom || t.monthly === 0) ? ' ' : (yearly ? 'Billed yearly' : 'Billed monthly')}</div>
			  <div className={styles.features}>
                {t.features?.map((f: string, i: number) => (
                  <div key={i}>• {f}</div>
                ))}
              </div>
            </div>
            <div>
              {
                t.custom
                  ? <Button size="small" type="secondary" text={ 'Contact Sales' } onMouseOverAnimation={false} iconRight={ <IconArrowRight /> } />
                  : t.monthly === 0
                    ? <Button size="small" text={ 'Get Started' } onMouseOverAnimation={false} />
                    : <Button size="small" text={ 'Start 7-Day Free Trial' } onMouseOverAnimation={false} />
              }
            </div>
          </div>
        ))}
      </div>
        </section>
    </div>
  );
};

export default PricingToggle;
