// import { NextResponse } from 'next/server';
// import fs from 'fs';

// type EventLike = any;

// async function parseEvent(request: Request): Promise<EventLike> {
//   const ct = (request.headers.get('content-type') || '').toLowerCase();
//   if (ct.includes('application/json') || ct.includes('text/json') || ct.includes('application/')) {
//     try { return await request.json(); } catch { return {}; }
//   }
//   try { const txt = await request.text(); return JSON.parse(txt || '{}'); } catch { return {}; }
// }

// function getSpreadsheetId(event: EventLike) {
//   if (!event) return null;
//   if (event?.sheets?.spreadsheetId) return event.sheets.spreadsheetId;
//   if (event?.sheets?.id) return event.sheets.id;
//   const params = event?.commonEventObject?.parameters;
//   if (!params) return null;
//   if (Array.isArray(params)) {
//     const p = params.find((p: any) => p && (p.key === 'spreadsheetId' || p.name === 'spreadsheetId'));
//     if (p) return p.value ?? p.stringValue ?? p.string_value ?? null;
//   } else if (typeof params === 'object') {
//     return params.spreadsheetId ?? params.spreadsheetId?.stringValue ?? null;
//   }
//   return null;
// }

// function buildCard(title: string, text: string) {
//   return { header: { title, subtitle: '' }, sections: [{ widgets: [{ textParagraph: { text } }] }] };
// }

// async function handle(request: Request) {
//   try {
//     const event = await parseEvent(request);
//     const spreadsheetId = getSpreadsheetId(event);
//     if (spreadsheetId) {
//       // Return the Card object directly for maximum compatibility
//       const card = buildCard('Portal0', `Connected to: ${spreadsheetId}`);
//       return NextResponse.json(card);
//     }

//     // Build a home card with a Connect button that triggers OPEN_DIALOG to the mata endpoint
//     const origin = (() => { try { return new URL(request.url).origin; } catch { return ''; } })();
//     const mataUrl = origin ? `${origin}/api/v1/addon/mata` : '/api/v1/addon/mata';

//     const home = {
//       header: { title: 'Portal0', subtitle: '' },
//       sections: [{
//         widgets: [
//           { textParagraph: { text: 'Click Connect to grant file access.' } },
//           {
//             buttonList: {
//               buttons: [
//                 {
//                   text: 'Connect to this Sheet',
//                   onClick: {
//                     action: {
//                       function: mataUrl,
//                       interaction: 'OPEN_DIALOG',
//                       loadIndicator: 'SPINNER',
//                       parameters: [
//                         { key: 'is_auth_attempt', value: 'true' },
//                         { key: 'debug_event', value: 'true' }
//                       ]
//                     }
//                   }
//                 }
//               ]
//             }
//           }
//         ]
//       }]
//     };

//     const resp = home;
//     try { fs.writeFileSync('./last_event_debug.json', JSON.stringify({ ts: new Date().toISOString(), headers: Object.fromEntries(request.headers), event: {} }, null, 2)); fs.writeFileSync('./last_response_debug.json', JSON.stringify(resp, null, 2)); } catch (e) {}
//     return NextResponse.json(resp);
//   } catch (err) {
//     console.error('api/v1/addon handler error', err);
//     const errCard = buildCard('Error', 'Internal server error');
//     try { fs.writeFileSync('./last_response_debug.json', JSON.stringify({ error: String(err) }, null, 2)); } catch (e) {}
//     return NextResponse.json({ action: { navigations: [{ pushCard: errCard }] } }, { status: 500 });
//   }
// }

// export async function GET(request: Request) { return handle(request); }
// export async function POST(request: Request) { return handle(request); }

export {};