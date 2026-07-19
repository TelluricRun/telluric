// Code.gs
function onOpen() {
  SpreadsheetApp.getUi()
    .createAddonMenu()
    .addItem('Open Telluric', 'showSidebar')
    .addToUi();
}

function showSidebar() {
  // We grab the target URL from the script properties (configured per environment)
  var baseUrl = PropertiesService.getScriptProperties().getProperty('NEXT_PUBLIC_SIDEBAR_URL');
  var sheetId = SpreadsheetApp.getActiveSpreadsheet().getId();
  
  // Pass the sheet ID so your Next.js app knows which data source to read
  var targetUrl = baseUrl + '?sheetId=' + sheetId;
  
  var html = HtmlService.createHtmlOutput('<script>window.location.href="' + targetUrl + '";</script>')
    .setTitle('Telluric')
    .setWidth(300);
    
  SpreadsheetApp.getUi().showSidebar(html);
}