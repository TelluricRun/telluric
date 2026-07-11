import { NextResponse } from 'next/server';
import fs from 'fs';

type EventLike = any;

async function parseEvent(request: Request): Promise<EventLike> {
  const ct = (request.headers.get('content-type') || '').toLowerCase();
  if (ct.includes('application/json') || ct.includes('text/json') || ct.includes('application/')) {
    try { return await request.json(); } catch { return {}; }
  }
  // If protobuf or other, return raw text parse attempt
  try { const txt = await request.text(); return JSON.parse(txt || '{}'); } catch { return {}; }
}

function getSpreadsheetId(event: EventLike) {
  if (!event) return null;
  if (event?.sheets?.spreadsheetId) return event.sheets.spreadsheetId;
  if (event?.sheets?.id) return event.sheets.id;
  const params = event?.commonEventObject?.parameters;
  if (Array.isArray(params)) {
    const p = params.find((p: any) => p && (p.key === 'spreadsheetId' || p.name === 'spreadsheetId'));
    if (p) return p.value ?? p.stringValue ?? p.string_value ?? null;
  } else if (params && typeof params === 'object') {
    const v = params.spreadsheetId ?? params.spreadsheetId?.stringValue ?? null;
    if (v) return v;
  }
  const had = event?.commonEventObject?.hostAppActionData;
  if (had && typeof had === 'object' && had.spreadsheetId) return had.spreadsheetId;
  return null;
}

function buildCard(title: string, text: string) {
  return { header: { title, subtitle: '' }, sections: [{ widgets: [{ textParagraph: { text } }] }] };
}

async function handle(request: Request) {
  let isAction = false;
  try {
    const event = await parseEvent(request);

    const paramsRoot = event?.commonEventObject?.parameters;
    const wantsDebug = (Array.isArray(paramsRoot) && paramsRoot.find((p: any) => (p?.key === 'debug_event' || p?.name === 'debug_event') && (p?.value === 'true' || p?.stringValue === 'true'))) ||
      (paramsRoot && typeof paramsRoot === 'object' && (paramsRoot.debug_event === 'true' || paramsRoot.debug_event === true || paramsRoot.debug_event?.stringValue === 'true'));

    isAction = !!(event?.commonEventObject?.parameters);

    if (wantsDebug) {
      const json = JSON.stringify(event, null, 2).slice(0, 6000);
      const debugCard = buildCard('Debug Event', json);
      const resp = isAction ? { action: { navigations: [{ updateCard: debugCard }] } } : debugCard;
      try { fs.writeFileSync('./last_event_debug.json', JSON.stringify({ ts: new Date().toISOString(), headers: Object.fromEntries(request.headers), event }, null, 2)); fs.writeFileSync('./last_response_debug.json', JSON.stringify(resp, null, 2)); } catch (e) {}
      if (isAction) return NextResponse.json(resp);
      return NextResponse.json(resp);
    }

    const spreadsheetId = getSpreadsheetId(event);
    if (spreadsheetId) {
      const success = buildCard('Portal0', `✅ Spreadsheet detected\n\nID: ${spreadsheetId}`);
      const resp = isAction ? { action: { navigations: [{ updateCard: success }] } } : success;
      try { fs.writeFileSync('./last_event_debug.json', JSON.stringify({ ts: new Date().toISOString(), headers: Object.fromEntries(request.headers), event }, null, 2)); fs.writeFileSync('./last_response_debug.json', JSON.stringify(resp, null, 2)); } catch (e) {}
      if (isAction) return NextResponse.json(resp);
      return NextResponse.json(resp);
    }

    const json = JSON.stringify(event, null, 2).slice(0, 6000);
    const connect = buildCard('Debug — No Sheet ID', json || 'No event payload');
    const resp = isAction ? { action: { navigations: [{ updateCard: connect }] } } : connect;
    try { fs.writeFileSync('./last_event_debug.json', JSON.stringify({ ts: new Date().toISOString(), headers: Object.fromEntries(request.headers), event }, null, 2)); fs.writeFileSync('./last_response_debug.json', JSON.stringify(resp, null, 2)); } catch (e) {}
    if (isAction) return NextResponse.json(resp);
    return NextResponse.json(resp);
  } catch (err) {
    console.error('api/v1/addon/mata handler error', err);
    const errCard = buildCard('Error', 'Internal error');
    try { fs.writeFileSync('./last_response_debug.json', JSON.stringify({ error: String(err) }, null, 2)); } catch (e) {}
    if (isAction) return NextResponse.json({ action: { navigations: [{ updateCard: errCard }] } }, { status: 500 });
    return NextResponse.json(errCard, { status: 500 });
  }
}

export async function GET(request: Request) { return handle(request); }
export async function POST(request: Request) { return handle(request); }
