import fs from 'fs';
import path from 'path';

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';

export interface LogEntry {
  id: string;
  level: LogLevel;
  message: string;
  meta?: Record<string, unknown>;
  timestamp: string;
}

const DEFAULT_LOG_DIR = process.env.LOG_DIR ?? path.join(process.cwd(), 'logs');

export const ensureLogDir = (dir = DEFAULT_LOG_DIR) => {
  try {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  } catch (err) {
    // fail silently; caller may fallback to in-memory
  }
};

export const formatEntry = (level: LogLevel, message: string, meta?: Record<string, unknown>): LogEntry => {
  return {
    id: `log_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    level,
    message,
    meta,
    timestamp: new Date().toISOString(),
  };
};

export const appendLog = (entry: LogEntry, dir = DEFAULT_LOG_DIR) => {
  try {
    ensureLogDir(dir);
    const file = path.join(dir, `${new Date().toISOString().slice(0, 10)}.log`);
    fs.appendFileSync(file, JSON.stringify(entry) + '\n', 'utf8');
  } catch (err) {
    // In environments without fs (edge), consider sending to remote service
    // For now, swallow errors so logging doesn't break the app
  }
};

export const createLogger = (namespace = 'app') => {
  const logger = {
    debug: (msg: string, meta?: Record<string, unknown>) => {
      const e = formatEntry('debug', `[${namespace}] ${msg}`, meta);
      appendLog(e);
      // also console
      // eslint-disable-next-line no-console
      console.debug(e);
    },
    info: (msg: string, meta?: Record<string, unknown>) => {
      const e = formatEntry('info', `[${namespace}] ${msg}`, meta);
      appendLog(e);
      // eslint-disable-next-line no-console
      console.info(e);
    },
    warn: (msg: string, meta?: Record<string, unknown>) => {
      const e = formatEntry('warn', `[${namespace}] ${msg}`, meta);
      appendLog(e);
      // eslint-disable-next-line no-console
      console.warn(e);
    },
    error: (msg: string, meta?: Record<string, unknown>) => {
      const e = formatEntry('error', `[${namespace}] ${msg}`, meta);
      appendLog(e);
      // eslint-disable-next-line no-console
      console.error(e);
    },
  };

  return logger;
};
