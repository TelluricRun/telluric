import React from 'react';
import styles from './problem-section.module.css';
import { Title } from '@/components/ui/title';
import { IconRocket, IconShield, IconBriefcase } from '@/components/ui/icons';

const problemContent = {
  label: 'Problem',
  headline: 'Live spreadsheets break the moment clients see them',
  description:
    'Operators stay in Sheets because it is flexible, automated, and already connected to every workflow. Clients only see messy formulas, internal notes, and broken permissions.',
  copy: [
    'Sharing spreadsheet data today means duplicating tabs, hiding columns, or onboarding clients into a no-code builder that drifts out of sync.',
    'Portal0 respects why teams run on Sheets in the first place. Keep the live workbook untouched while sending clients a polished, permissioned surface.',
  ],
  pains: [
    {
      title: 'Formulas exposed',
      detail: 'Clients see your pricing logic, margin math, or proprietary models the moment you share the tab.',
    },
    {
      title: 'Internal notes visible',
      detail: '"Do not show client" columns and checklist comments leak alongside the deliverable.',
    },
    {
      title: 'Access is brittle',
      detail: 'Duplicating tabs, emailing CSVs, and hiding rows creates errors and no audit trail.',
    },
    {
      title: 'Unbranded handoff',
      detail: 'A raw Sheet link feels like a draft, not a premium portal clients can trust.',
    },
  ],
};

const solutionContent = {
  label: 'Solution',
  headline: 'Portal0 is the client-safe layer that lives inside Sheets',
  description:
    'Instead of adopting another dashboard tool, Portal0 turns the Sheet you already use into a branded, encrypted portal with row-level controls and Vault0-ready paywalls.',
  comparison: [
    {
      feature: 'Launch speed',
      traditional: 'Map data, learn a builder, recreate layouts, and invite clients to yet another app.',
      portal0: 'Select the columns that matter and ship a secure link directly from the Sheet sidebar.',
    },
    {
      feature: 'Source of truth',
      traditional: 'External databases or synced tables drift from the workbook operators update daily.',
      portal0: 'Your Google Sheet or Excel file stays live. Portal0 reads from the source in real time.',
    },
    {
      feature: 'Client experience',
      traditional: 'Generic dashboard UI that ignores your brand and forces clients to learn a new tool.',
      portal0: 'A branded microsite at portal0.run/your-client plus inline summaries inside the Sheet.',
    },
    {
      feature: 'Governance',
      traditional: 'Limited row-level control and no way to monetize access without engineering help.',
      portal0: 'Per-row permissions, audit logs, and optional Vault0 paywalls for premium data.',
    },
  ],
  differentiators: [
    {
      title: 'Zero-friction workflow',
      description: 'Portal0 behaves like the professional "Share" button for operations teams—no builders, no dashboard debt.',
      Icon: IconRocket,
    },
    {
      title: 'Stay-in-Sheets architecture',
      description: 'Shadow IDs and Developer Metadata keep portals stable even as columns move or headers change.',
      Icon: IconBriefcase,
    },
    {
      title: 'Privacy as a feature',
      description: 'User-derived encryption plus row-level controls keep legal, finance, and agency work compliant.',
      Icon: IconShield,
    },
  ],
};

const ProblemSection: React.FC = () => {
  return (
    <section className={styles.wrapper} aria-labelledby="problem-heading">
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.header}>
            <Title render={() => <h4>/ problem section /</h4>} />
            <Title render={() => <h2 id="problem-heading">Stop sending messy spreadsheets to clients</h2>} />
            <Title
              render={() => (
                <h3>
                  Portal0 turns a single Google Sheet into a branded, encrypted portal without forcing teams to leave their
                  workflow.
                </h3>
              )}
            />
          </div>

          <div className={styles.sectionStack}>
            <section className={`${styles.panel} ${styles.problemPanel}`} aria-labelledby="problem-block-heading">
              <div className={styles.badge}>{problemContent.label}</div>
              <div className={styles.panelHeading}>
                <h3 id="problem-block-heading">{problemContent.headline}</h3>
                <p>{problemContent.description}</p>
              </div>

              <div className={styles.painGrid}>
                {problemContent.pains.map((point) => (
                  <article key={point.title} className={styles.painCard}>
                    <h6>{point.title}</h6>
                    <p>{point.detail}</p>
                  </article>
                ))}
              </div>

              <div className={styles.panelBody}>
                {problemContent.copy.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <section className={`${styles.panel} ${styles.solutionPanel}`} aria-labelledby="solution-block-heading">
              <div className={styles.badge}>{solutionContent.label}</div>
              <div className={styles.panelHeading}>
                <h3 id="solution-block-heading">{solutionContent.headline}</h3>
                <p>{solutionContent.description}</p>
              </div>

              <div className={styles.comparisonGrid}>
                {solutionContent.comparison.map((row) => (
                  <article key={row.feature} className={styles.comparisonCard}>
                    <div className={styles.comparisonFeature}>{row.feature}</div>
                    <div className={styles.comparisonColumn}>
                      <span>Traditional</span>
                      <p>{row.traditional}</p>
                    </div>
                    <div className={`${styles.comparisonColumn} ${styles.portalColumn}`}>
                      <span>Portal0</span>
                      <p>{row.portal0}</p>
                    </div>
                  </article>
                ))}
              </div>

              <div className={styles.differentiatorsGrid}>
                {solutionContent.differentiators.map(({ title, description, Icon }) => (
                  <article key={title} className={styles.diffCard}>
                    <div className={styles.iconWrapper}>
                      <Icon size="28px" color="var(--tropical-blue-light)" />
                    </div>
                    <div>
                      <h4>{title}</h4>
                      <p>{description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
