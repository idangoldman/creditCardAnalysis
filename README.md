# Credit Card Analysis
Analyze credit card spreadsheets outputs and organize them in a neat table.
This script analyzes Israeli credit cards spreadsheet reports and builds a db people can build nice dashboards from Like:

![Google DataStudio Screenshot](/screenshot.png)

## Spreadsheet Instructions
- Create a new spreadsheet with sheets
- Create column headers for each sheet

Create a new spreadsheet with the following sheets:
- DB
- Status
- Categories
- _categories_flattened (this is a utility sheet to hold temporary calculations)

Create column headers in **DB** sheet:
- Date Added
- Card Type
- Card Number
- Billing Month
- Transaction Date
- Business Name
- Amount
- Currency
- Category
*Category header created automaticaly by using the following formula:
```
"=arrayformula(iferror(vlookup(F2:F,'_categories_flattened'!A2:B,2,FALSE),"ללא סיווג"))"
```

Create column headers in **Status** sheet
Status headers. rows for all headers are created by this script.
- File Name
- File ID

Categories tab
- This tab is handled manually (you can choose your own categories and where each business goes)
- The only mandatory column is the last one which is "ללא סיווג". Its first row should run the following formula:
"=QUERY(DB!F2:I,"select F where I='ללא סיווג'",0)"

_categories_flattened tab
This tab organizes the categories table from previous tab in a list.
Headers:
- Business name
-- "=filter(flatten(Categories!A2:O),NOT(ISBLANK(flatten(Categories!A2:O))))"
- Category
-- "=arrayformula(reverseLookup(A2:A,transpose(Categories!A:O)))"
