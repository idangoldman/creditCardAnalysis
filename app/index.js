const FILENAME_PREFIX = {
  'VISA'    : 'Transactions',
  'ISRACARD': 'Export',
  'MAX'     : 'transaction'
};

const SPREADSHEET_STRUCTURE = {
  'DB': ['Date Added', 'File ID', 'File Name', 'Card Type', 'Card Number', 'Billing Date', 'Transaction Date', 'Business Name', 'Amount', 'Currency', 'Category'],
  'Status': ['File ID', 'Folder ID'],
  'Categories': ['ללא סיווג'],
  '_categories_flattened': ['Business Name', 'Category']
};

function onOpen() {
  const MENU_TITLE = 'Cards Analysis';
  const MENU_ITEMS = [
    { name: 'Set Up Spreadsheet', functionName: 'setUpSpreadsheet' },
    { name: 'Sync Report Files',  functionName: 'syncReportFiles' }
  ];

  SpreadsheetApp.getActive().addMenu(MENU_TITLE, MENU_ITEMS);
}

function setUpSpreadsheet() {
  const currentSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const beforeSetUpSheet = currentSpreadsheet.getSheets();

  for (const [sheetName, sheetHeaders] of Object.entries(SPREADSHEET_STRUCTURE)) {
    let sheet = currentSpreadsheet.getSheetByName(sheetName);

    if (!sheet) {
      sheet = currentSpreadsheet.insertSheet(sheetName);
    }

    sheet
      .clearContents()
      .appendRow(sheetHeaders)
      .setFrozenRows(1);

    sheet
      .setActiveSelection('A1:Z1')
      .setFontWeight('bold');
  }

  if (beforeSetUpSheet.length === 1) {
    currentSpreadsheet.deleteSheet(beforeSetUpSheet[0]);
  }

  currentSpreadsheet.setActiveSheet(
    currentSpreadsheet.getSheets()[0]
  );
}

function syncReportFiles() {
  // ...
}
