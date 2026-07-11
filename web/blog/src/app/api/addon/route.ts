import { NextResponse } from 'next/server';
import fs from 'fs';

type EventLike = any;

// Helper 1: Parse incoming request events
async function parseEvent(request: Request): Promise<EventLike> {
  const ct = (request.headers.get('content-type') || '').toLowerCase();
  if (ct.includes('application/json') || ct.includes('text/json') || ct.includes('application/')) {
    try { return await request.json(); } catch { return {}; }
  }
  try { const txt = await request.text(); return JSON.parse(txt || '{}'); } catch { return {}; }
}

// Helper 2: Extract Spreadsheet ID
function getSpreadsheetId(event: EventLike) {
  if (!event) return null;
  if (event?.sheets?.id) return event.sheets.id;
  if (event?.sheets?.spreadsheetId) return event.sheets.spreadsheetId;
  if (event?.commonEventObject?.hostAppActionData?.spreadsheetId) return event.commonEventObject.hostAppActionData.spreadsheetId;
  return event?.sheets?.id || event?.commonEventObject?.hostAppActionData?.spreadsheetId || null;
}

// Helper 3: Build Google Workspace Add-on Cards
function buildCard(title: string, text: string) {
  return { header: { title, subtitle: '' }, sections: [{ widgets: [{ textParagraph: { text } }] }] };
}

// --- Next.js API Routes ---

export async function POST(request: Request) {
  let event: EventLike = {};
  try {
    const ct = (request.headers.get('content-type') || '').toLowerCase();
    if (ct.includes('protobuf')) {
      event = {};
    } else {
      try { event = await request.json(); } catch { const txt = await request.text(); try { event = JSON.parse(txt); } catch { event = {}; } }
    }

    const paramsRoot = event?.commonEventObject?.parameters;
    const wantsDebug = (Array.isArray(paramsRoot) && paramsRoot.find((p: any) => (p?.key === 'debug_event' || p?.name === 'debug_event') && (p?.value === 'true' || p?.stringValue === 'true'))) ||
      (paramsRoot && typeof paramsRoot === 'object' && (paramsRoot.debug_event === 'true' || paramsRoot.debug_event === true || paramsRoot.debug_event?.stringValue === 'true'));

    const isAction = !!(event?.commonEventObject?.parameters);

    if (wantsDebug) {
      const json = JSON.stringify(event, null, 2).slice(0, 6000);
      const debugCard = { header: { title: 'Debug Event', subtitle: '' }, sections: [{ widgets: [{ textParagraph: { text: json } }] }] };
      const resp = isAction ? { action: { navigations: [{ updateCard: debugCard }] } } : debugCard;
      try { fs.writeFileSync('./last_event_debug.json', JSON.stringify({ ts: new Date().toISOString(), headers: Object.fromEntries(request.headers), event }, null, 2)); fs.writeFileSync('./last_response_debug.json', JSON.stringify(resp, null, 2)); } catch (e) {}
      return NextResponse.json(resp);
    }

    const spreadsheetId = getSpreadsheetId(event);
    if (spreadsheetId) {
      const success = buildCard('Portal0', `Connected to: ${spreadsheetId}`);
      const resp = isAction ? { action: { navigations: [{ updateCard: success }] } } : success;
      try { fs.writeFileSync('./last_event_debug.json', JSON.stringify({ ts: new Date().toISOString(), headers: Object.fromEntries(request.headers), event }, null, 2)); fs.writeFileSync('./last_response_debug.json', JSON.stringify(resp, null, 2)); } catch (e) {}
      return NextResponse.json(resp);
    }

    const origin = (() => { try { return new URL(request.url).origin; } catch { return ''; } })();
    const mataUrl = origin ? `${origin}/api/v1/addon/mata` : '/api/v1/addon/mata';

    const welcomeCard = {
      header: { title: 'Portal0', subtitle: 'Setup Required' },
      sections: [{ widgets: [ { textParagraph: { text: 'Grant access to this file to continue.' } }, { buttonList: { buttons: [ { text: 'Connect to this Sheet', onClick: { action: { function: mataUrl, interaction: 'OPEN_DIALOG', loadIndicator: 'SPINNER', parameters: [ { key: 'is_auth_attempt', value: 'true' }, { key: 'debug_event', value: 'true' } ] } } } ] } } ] }]
    };

    const resp = isAction ? { action: { navigations: [{ updateCard: welcomeCard }] } } : welcomeCard;
    try { fs.writeFileSync('./last_event_debug.json', JSON.stringify({ ts: new Date().toISOString(), headers: Object.fromEntries(request.headers), event }, null, 2)); fs.writeFileSync('./last_response_debug.json', JSON.stringify(resp, null, 2)); } catch (e) {}
    return NextResponse.json(resp);
  } catch (err) {
    console.error('api/addon error', err);
    const errCard = buildCard('Error', 'Internal server error');
    return NextResponse.json(errCard, { status: 500 });
  }
}

export async function GET(request: Request) {
  const origin = (() => { try { return new URL(request.url).origin; } catch { return ''; } })();
  const mataUrl = origin ? `${origin}/api/v1/addon/mata` : '/api/v1/addon/mata';

  const home = {
    header: { title: 'Portal0', subtitle: '' },
    sections: [{ widgets: [ { textParagraph: { text: 'Click Connect to grant file access.' } }, { buttonList: { buttons: [ { text: 'Connect to this Sheet', onClick: { action: { function: mataUrl, interaction: 'OPEN_DIALOG', loadIndicator: 'SPINNER', parameters: [ { key: 'is_auth_attempt', value: 'true' }, { key: 'debug_event', value: 'true' } ] } } } ] } } ] }]
  };

  try { fs.writeFileSync('./last_response_debug.json', JSON.stringify(home, null, 2)); } catch (e) {}
  return NextResponse.json(home);
}