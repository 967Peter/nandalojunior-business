function doPost(e){
  const sheet = SpreadsheetApp.openById('PASTE_YOUR_SHEET_ID_HERE').getSheetByName('Sheet1');
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.name,
    data.mobile,
    data.idnumber,
    data.service,
    data.notes
  ]);

  return ContentService.createTextOutput(JSON.stringify({status:'success'}))
    .setMimeType(ContentService.MimeType.JSON);
}
