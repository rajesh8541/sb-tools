import { Component } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-excel-html',
  templateUrl: './excel-html.component.html',
  styleUrls: ['./excel-html.component.scss']
})
export class ExcelHtmlComponent {
  ExcelData: any
  inputSample: any
  getResult: any
  textchange = "Show HTML";
  myList: any

  constructor() { }

  getInput() {

  }

  fileLoad(e: any) {
    let file = e.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);
    fileReader.onload = (e) => {
      var WorkBook = XLSX.read(fileReader.result, { type: 'binary' });
      var SheetNames = WorkBook.SheetNames;
      this.ExcelData = XLSX.utils.sheet_to_json(WorkBook.Sheets[SheetNames[0]])
      this.getResult = JSON.stringify(this.ExcelData, null, 4)
      this.myList = this.ExcelData
    }
  }
  convert() {
    this.getResult = '';
    let columns: string[];
    columns = []; let space = '';
    this.getResult = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Document</title></head><table class="table">';
    for (var i = 0; i < this.myList.length; i++) {
      var rowmp = this.myList[i];
      for (let key in rowmp) {
        if (!columns.some(x => x == key)) {
          columns.push(key);
          space += '<th>' + key + '</th>';
        }
      }
    }
    this.getResult += "<tr>" + space + "</tr>";
    for (var i = 0; i < this.myList.length; i++) {
      let row = '';
      for (var colIndex = 0; colIndex < columns.length; colIndex++) {
        var cellValue = this.myList[i][columns[colIndex]];
        if (cellValue == null)
          cellValue = "";
        row += '<td>' + cellValue + '</td>';
      }
      this.getResult += "<tr>" + row + "</tr>";
    }
    this.getResult += "</table></body></html>";
    console.log(this.getResult)
    return this.getResult;
  }

  showOputput()
  {
   document.getElementById('test')!.innerHTML = `<h5>${this.getResult}</h5>`;
   
  }

  downloadFile() 
    {
      console.log(this.getResult);
      
        let data = this.getResult
        let file = 'Document-' + Date.now() + '.html';
        let link = document.createElement('a');
        link.download = file;
        let blob = new Blob(['' + data + ''], {
          type: 'text/plain'
        });
        link.href = URL.createObjectURL(blob);
        link.click();
    }
  
  OnInit() { }

}
