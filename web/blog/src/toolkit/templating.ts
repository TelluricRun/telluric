export interface TemplateRenderOptions {
  partials?: Record<string, string>;
  helpers?: Record<string, (ctx?: any) => string>;
}

const defaultEscape = (str: string) =>
  String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

/**
 * Very small and safe templating: {{var}} for escaped, {{{var}}} for raw.
 * Supports partials via {{> partialName }} and simple helpers: {{helperName arg}}
 */
export const renderTemplate = (
  template: string,
  context: Record<string, any> = {},
  options: TemplateRenderOptions = {}
): string => {
  const helpers = options.helpers ?? {};
  const partials = options.partials ?? {};

  // replace partials first
  template = template.replace(/{{>\s*([a-zA-Z0-9_-]+)\s*}}/g, (_, name) => {
    return partials[name] ?? '';
  });

  // handle helpers like {{helperName arg}}
  template = template.replace(/{{\s*([a-zA-Z0-9_\-]+)\s+([^}]+)}}/g, (_, helper, arg) => {
    const fn = helpers[helper];
    if (!fn) return '';
    const value = arg.trim();
    // arg may be a string literal or a path
    const resolved = resolvePath(value, context);
    try {
      return fn(resolved);
    } catch (err) {
      return '';
    }
  });

  // raw output {{{var}}}
  template = template.replace(/{{{\s*([a-zA-Z0-9_\.\-]+)\s*}}}/g, (_, pathStr) => {
    const val = resolvePath(pathStr, context);
    return val == null ? '' : String(val);
  });

  // escaped output {{var}}
  template = template.replace(/{{\s*([a-zA-Z0-9_\.\-]+)\s*}}/g, (_, pathStr) => {
    const val = resolvePath(pathStr, context);
    return val == null ? '' : defaultEscape(String(val));
  });

  return template;
};

const resolvePath = (pathStr: string, ctx: Record<string, any>): any => {
  if (!pathStr) return '';
  if (/^\".*\"$/.test(pathStr) || /^\'.*\'$/.test(pathStr)) {
    return pathStr.slice(1, -1);
  }
  const parts = pathStr.split('.');
  let cur: any = ctx;
  for (const p of parts) {
    if (cur == null) return null;
    cur = cur[p];
  }
  return cur;
};
