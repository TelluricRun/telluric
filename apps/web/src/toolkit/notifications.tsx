import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

export type ToastKind = 'info' | 'success' | 'warning' | 'error';

export interface Toast {
  id: string;
  message: string;
  kind?: ToastKind;
  duration?: number; // ms
}

interface ToastContextValue {
  push: (toast: Omit<Toast, 'id'>) => string;
  dismiss: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export const useToast = (): ToastContextValue => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
};

const DEFAULT_DURATION = 4000;

export const ToastProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    return () => {
      mounted.current = false;
;    };
  }, []);

  const push = useCallback((payload: Omit<Toast, 'id'>) => {
    const id = `toast_${Math.random().toString(36).slice(2, 9)}`;
    const toast: Toast = {
      id,
      duration: payload.duration ?? DEFAULT_DURATION,
      kind: payload.kind ?? 'info',
      message: payload.message,
    };

    setToasts((s) => [toast, ...s]);

    if (toast.duration && toast.duration > 0) {
      setTimeout(() => setToasts((s) => s.filter((t) => t.id !== id)), toast.duration);
    }

    return id;
  }, []);

  const dismiss = useCallback((id: string) => {
    setToasts((s) => s.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ push, dismiss }}>
      {children}
      <div aria-live="polite" style={containerStyle}>
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} onDismiss={() => dismiss(t.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
};

const containerStyle: React.CSSProperties = {
  position: 'fixed',
  right: 20,
  bottom: 20,
  width: 360,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  zIndex: 9999,
};

const toastBaseStyle: React.CSSProperties = {
  display: 'flex',
  gap: 12,
  alignItems: 'flex-start',
  padding: '12px 14px',
  borderRadius: 12,
  boxShadow: '0 10px 30px rgba(15,31,63,0.12)',
  background: '#fff',
  border: '1px solid rgba(15,31,63,0.06)',
};

const kindColors: Record<ToastKind, { accent: string; text: string }> = {
  info: { accent: '#2b6cb0', text: '#1f2937' },
  success: { accent: '#16a34a', text: '#064e3b' },
  warning: { accent: '#d97706', text: '#7c2d12' },
  error: { accent: '#dc2626', text: '#7f1d1d' },
};

const ToastItem: React.FC<{ toast: Toast; onDismiss: () => void }> = ({ toast, onDismiss }) => {
  useEffect(() => {
    let mounted = true;
    return () => {
      mounted = false;
    };
  }, []);

  const colors = kindColors[toast.kind ?? 'info'];

  return (
    <div style={{ ...toastBaseStyle, borderLeft: `4px solid ${colors.accent}` }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, color: colors.text, marginBottom: 6 }}>{toast.message}</div>
      </div>
      <button onClick={onDismiss} aria-label="Dismiss" style={dismissBtnStyle}>
        ×
      </button>
    </div>
  );
};

const dismissBtnStyle: React.CSSProperties = {
  background: 'transparent',
  border: 'none',
  fontSize: 18,
  cursor: 'pointer',
  color: 'rgba(15,31,63,0.6)',
};
