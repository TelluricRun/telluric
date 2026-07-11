import React, { useState } from 'react';
import { IconRocket, IconCircles, IconBankCard, IconDashboard, IconUser, IconTimeline, IconAnalytics } from '@/components/ui/icons';
import styles from './fullwidth-section.module.css';

const agents = [
		{
			icon: 'IconRocket',
			name: 'GitHub Copilot',
			content:
				'In early testing, Grok Code Fast has shown both its speed and quality in agentic coding tasks. Empowering developers with powerful tools is a core part of our mission at GitHub Copilot, and this is a complelling new option for our developers.',
		},
		{
			icon: 'IconCircles',
			name: 'Cline',
			content:
				'Scribe is a documentation-first agent that converts workflows and sheet formulas into step-by-step runbooks and API-style docs.',
		},
		{
			icon: 'IconBankCard',
			name: 'opencode',
			content:
				'Muse helps craft client-facing language, subject lines, and polished proposals from raw spreadsheet rows and comments.',
		},
		{
			icon: 'IconDashboard',
			name: 'Cursor',
			content:
				'Scout inspects incoming client data, flags anomalies, and suggests validation rules before a portal is published.',
		},
		{
			icon: 'IconUser',
			name: 'Kilo Code',
			content:
				'Keeper focuses on privacy: it scans for PII, suggests redaction, and recommends row-level permission patterns.',
		},
		{
			icon: 'IconTimeline',
			name: 'Roo Code',
			content:
				'Argus is the monitoring agent — it watches syncs, alerts on drift, and generates lightweight audit summaries for recent activity.',
		},
		{
			icon: 'IconAnalytics',
			name: 'Windsurf',
			content:
				'Oracle provides predictive estimates, forecasting, and scenario modeling derived directly from historical sheet data.',
		},
	];

const ICONS: Record<string, any> = {
	IconRocket,
	IconCircles,
	IconBankCard,
	IconDashboard,
	IconUser,
	IconTimeline,
	IconAnalytics,
};

const FullWidthSection: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
	const [selectedIndex, setSelectedIndex] = useState<number>(0);

	const handleSelect = (idx: number) => {
		setSelectedIndex(idx);
	};

	return (
    <section className={styles.wrapper} aria-hidden="true">
      <div className={styles.container}>
        <div className={styles.stack}>
			<h3>portal0 — client portals for everyone</h3>
			<h4>For a limited time, we offer portal0 with full access to all features, regardless of your plan. This is a great opportunity to explore everything portal0 has to offer.</h4>
		</div>
		<div className={styles.stack}>
			<div className={styles.table}>
				<div className={styles.tableHeader}>
					<h4>Start 7-Day Free Trial</h4>
					<h4>We're excited to offer this opportunity to everyone!</h4>
				</div>
				<div className={styles.tableBody}>
					<div className={styles.tableBodyLeft}>
						{agents.map((a, idx) => (
							<div
								key={a.name}
								onClick={() => handleSelect(idx)}
								className={`${styles.tableItemTab} ${selectedIndex === idx ? styles.tableItemTabActive : ''}`}
							>
								<div className={styles.tableItemTabIcon}>
									{
										(() => {
											const IconComp = ICONS[a.icon] ?? IconRocket;
											const color = selectedIndex === idx ? '#000000' : 'var(--text-primary)';
											return <IconComp size={'20px'} color={color} />;
										})()
									}
								</div>
								<div className={styles.tableItemTabName}>{a.name}</div>
							</div>
						))}
					</div>
					<div className={styles.tableBodyCenter}></div>
					<div className={styles.tableBodyRight}>
						<div id={`agent-panel-${selectedIndex}`} role="tabpanel">
							<h4>{` "${agents[selectedIndex].content}" `}</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	  </div>
	</section>
  );
}

export default FullWidthSection;
