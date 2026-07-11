// import { NextResponse } from 'next/server';
// import fs from 'fs';

// type EventLike = any;

// function getSpreadsheetId(event: EventLike) {
//   return event?.sheets?.id || event?.commonEventObject?.hostAppActionData?.spreadsheetId || null;
// }

// function buildCard(title: string, text: string) {
//   return { header: { title, subtitle: '' }, sections: [{ widgets: [{ textParagraph: { text } }] }] };
// }

// export async function POST(request: Request) {
//   let isAction = false;
//   let event: EventLike = {};
//   try {
//     const ct = (request.headers.get('content-type') || '').toLowerCase();
//     if (ct.includes('protobuf')) {
//       event = {};
//     } else {
//       try { event = await request.json(); } catch { const txt = await request.text(); try { event = JSON.parse(txt); } catch { event = {}; } }
//     }

//     const paramsRoot = event?.commonEventObject?.parameters;
//     const wantsDebug = (Array.isArray(paramsRoot) && paramsRoot.find((p: any) => (p?.key === 'debug_event' || p?.name === 'debug_event') && (p?.value === 'true' || p?.stringValue === 'true'))) ||
//       (paramsRoot && typeof paramsRoot === 'object' && (paramsRoot.debug_event === 'true' || paramsRoot.debug_event === true || paramsRoot.debug_event?.stringValue === 'true'));

//     isAction = !!(event?.commonEventObject?.parameters);

//     if (wantsDebug) {
//       const json = JSON.stringify(event, null, 2).slice(0, 6000);
//       const debugCard = buildCard('Debug Event', json);
//       const resp = isAction ? { action: { navigations: [{ updateCard: debugCard }] } } : debugCard;
//       try { fs.writeFileSync('./last_event_debug.json', JSON.stringify({ ts: new Date().toISOString(), headers: Object.fromEntries(request.headers), event }, null, 2)); fs.writeFileSync('./last_response_debug.json', JSON.stringify(resp, null, 2)); } catch (e) {}
//       return NextResponse.json(resp);
//     }

//     let spreadsheetId = getSpreadsheetId(event);
//     // heuristic
//     if (!spreadsheetId) {
//       const idRegex = /^[A-Za-z0-9-_]{20,}$/;
//       const params = event?.commonEventObject?.parameters;
//       if (Array.isArray(params)) {
//         for (const p of params) {
//           const candidates = [p?.value, p?.stringValue, p?.string_value, p?.textValue];
//           for (const c of candidates) {
//             if (typeof c === 'string' && idRegex.test(c)) { spreadsheetId = c; break; }
//           }
//           if (spreadsheetId) break;
//         }
//       } else if (params && typeof params === 'object') {
//         for (const k of Object.keys(params)) {
//           const v = params[k];
//           const val = v && (v.stringValue ?? v.value ?? v);
//           if (typeof val === 'string' && idRegex.test(val)) { spreadsheetId = val; break; }
//         }
//       }
//       if (!spreadsheetId) {
//         const had = event?.commonEventObject?.hostAppActionData;
//         if (had && typeof had === 'object') {
//           const stack = [had];
//           while (stack.length) {
//             const node = stack.pop();
//             for (const key of Object.keys(node)) {
//               const v = node[key];
//               if (typeof v === 'string' && idRegex.test(v)) { spreadsheetId = v; break; }
//               if (v && typeof v === 'object') stack.push(v);
//             }
//             if (spreadsheetId) break;
//           }
//         }
//       }
//     }

//     if (spreadsheetId) {
//       const success = buildCard('Portal0', `✅ Spreadsheet detected\n\nID: ${spreadsheetId}`);
//       const resp = isAction ? { action: { navigations: [{ updateCard: success }] } } : success;
//       try { fs.writeFileSync('./last_event_debug.json', JSON.stringify({ ts: new Date().toISOString(), headers: Object.fromEntries(request.headers), event }, null, 2)); fs.writeFileSync('./last_response_debug.json', JSON.stringify(resp, null, 2)); } catch (e) {}
//       return NextResponse.json(resp);
//     }

//     const jsonNoSheet = JSON.stringify(event, null, 2).slice(0, 6000);
//     const connect = buildCard('Debug — No Sheet ID', jsonNoSheet || 'No event payload');
//     const resp = isAction ? { action: { navigations: [{ updateCard: connect }] } } : connect;
//     try { fs.writeFileSync('./last_event_debug.json', JSON.stringify({ ts: new Date().toISOString(), headers: Object.fromEntries(request.headers), event }, null, 2)); fs.writeFileSync('./last_response_debug.json', JSON.stringify(resp, null, 2)); } catch (e) {}
//     return NextResponse.json(resp);
//   } catch (err) {
//     console.error('api/addon/mata error', err);
//     const errCard = buildCard('Error', 'Internal error');
//     if (typeof isAction !== 'undefined' && isAction) return NextResponse.json({ action: { navigations: [{ updateCard: errCard }] } }, { status: 500 });
//     return NextResponse.json(errCard, { status: 500 });
//   }
// }

export {};