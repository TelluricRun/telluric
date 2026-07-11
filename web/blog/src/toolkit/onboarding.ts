export type OnboardingStepId =
  | 'connect-sheet'
  | 'select-columns'
  | 'configure-permissions'
  | 'invite-client'
  | 'set-paywall';

export interface OnboardingStep {
  id: OnboardingStepId;
  label: string;
  completed: boolean;
  blocking?: boolean;
}

export interface ChecklistContext {
  hasAddonInstalled: boolean;
  hasClientInvitation: boolean;
  paywallEnabled: boolean;
}

export const buildWelcomeChecklist = (context: ChecklistContext): OnboardingStep[] => {
  const steps: OnboardingStep[] = [
    {
      id: 'connect-sheet',
      label: 'Connect your Google Sheet or Excel workbook',
      completed: context.hasAddonInstalled,
      blocking: true,
    },
    {
      id: 'select-columns',
      label: 'Pick the columns that should be visible to clients',
      completed: false,
    },
    {
      id: 'configure-permissions',
      label: 'Define per-client permissions and paywalls',
      completed: context.paywallEnabled,
    },
    {
      id: 'invite-client',
      label: 'Send the first secure portal link to a client',
      completed: context.hasClientInvitation,
    },
    {
      id: 'set-paywall',
      label: 'Enable Vault0 paywall for premium access',
      completed: context.paywallEnabled,
    },
  ];

  return steps;
};

export const determineNextOnboardingStep = (steps: OnboardingStep[]): OnboardingStep | null => {
  return steps.find((step) => !step.completed) ?? null;
};

export const shouldNudgeForAddonInstall = (context: ChecklistContext): boolean => {
  return !context.hasAddonInstalled;
};
