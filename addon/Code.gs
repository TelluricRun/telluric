// Code.gs

/**
 * Creates the native Google Sheets extension top-level menu hook.
 */
function onOpen() {
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem('Open Telluric', 'showSidebar')
    .addToUi();
}

/**
 * Renders the primary application UI inside the right-hand Sidebar panel using a clean,
 * flick-free iframe architecture.
 */
function showSidebar() {
  // Grab the baseline root web app environment target (e.g., https://xxx.ngrok-free.app or https://telluric.app)
  var baseUrl = PropertiesService.getScriptProperties().getProperty('NEXT_PUBLIC_APPS_WEB_URL');
  var sheetId = SpreadsheetApp.getActiveSpreadsheet().getId();
  
  if (!baseUrl) {
    SpreadsheetApp.getUi().alert('Configuration Error: NEXT_PUBLIC_APPS_WEB_URL is not set in Script Properties.');
    return;
  }

  // Construct the secure, direct path to the sidebar route asset
  var targetUrl = baseUrl.replace(/\/$/, '') + '/sidebar?sheetId=' + sheetId;

    var iframeWrapper = `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:0;overflow:hidden;">
    <iframe
      src="${targetUrl}"
      style="width:100%;height:100vh;border:0;display:block;"
      allow="clipboard-read; clipboard-write"
    ></iframe>
  </body>
</html>`;
  
  var html = HtmlService.createHtmlOutput(iframeWrapper)
    .setTitle('Telluric')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL); // Permits Vercel deployment embedding
    
  SpreadsheetApp.getUi().showSidebar(html);
}

/**
 * A globally accessible bridge method that can be triggered directly from your 
 * Next.js client UI scripts via: google.script.run.openCustomModal('/modals/wizard', 'Title', 700, 500)
 *
 * @param {string} routePath The Next.js route path to mount (e.g., '/modals/proposal-wizard')
 * @param {string} title The display text header string printed on Google's modal frame
 * @param {number} width The pixel width of the pop-up modal element container
 * @param {number} height The pixel height of the pop-up modal element container
 */
function openCustomModal(routePath, title, width, height) {
  var baseUrl = PropertiesService.getScriptProperties().getProperty('NEXT_PUBLIC_APPS_WEB_URL');
  var sheetId = SpreadsheetApp.getActiveSpreadsheet().getId();
  
  if (!baseUrl) {
    console.error('Configuration Error: NEXT_PUBLIC_APPS_WEB_URL is missing.');
    return;
  }

  // Clean the route mapping path parameter string prefix
  var cleanPath = routePath.indexOf('/') === 0 ? routePath : '/' + routePath;
  
  // Append the active sheet ID context as a URL param so the modal knows what data it belongs to
  var divider = cleanPath.indexOf('?') !== -1 ? '&' : '?';
  var targetUrl = baseUrl.replace(/\/$/, '') + cleanPath + divider + 'sheetId=' + sheetId;
  
  // Assemble the matching modal iframe sandbox layout container
  var iframeWrapper = 
    '<iframe src="' + targetUrl + '" ' +
    'style="width:100%; height:100%; border:none; margin:0; padding:0; position:absolute; top:0; left:0; right:0; bottom:0;">' +
    '</iframe>';
  
  var html = HtmlService.createHtmlOutput(iframeWrapper)
    .setWidth(width || 650)
    .setHeight(height || 480)
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    
  SpreadsheetApp.getUi().showModalDialog(html, title || ' ');
}