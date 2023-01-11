import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-html-table-generator',
  templateUrl: './html-table-generator.component.html',
  styleUrls: ['./html-table-generator.component.scss'],
})
export class HtmlTableGeneratorComponent implements OnInit {
  outputText = '';

  userRows: Array<number> = [1, 2, 3];
  userColumns: Array<number> = [1, 2, 3];

  headerArr: Array<string> = [];
  tableRowArr: Array<string> = [];
  finalGeneratedTable: string = '';

  userInputArray: Array<any> = [];
  dataCopyArray: Array<any> = [];

  checkFlag: boolean = false;

  // Variables for generating style starts
  userPadding: string | undefined = '5';
  userWidth: string | undefined = '50';
  userHeight: string | undefined = '20';
  userBorderWidth: string | undefined = '1';
  userBorderStyle: string | undefined = 'solid';
  userBorderColor: string | undefined = '#000000';
  userBorderCollapse: string | undefined = 'collapse';
  userBorderSpacing: string | undefined = '5';
  userHeaderBgColor: string | undefined = '#ffffff';
  userBodyBgColor: string | undefined = '#ffffff';
  userHeaderFontColor: string | undefined = '#313030';
  userBodyFontColor: string | undefined = '#313030';
  userTextAlign: string | undefined = 'center';
  userCssSelector: string | undefined = 'table';
  showCssSelector: string | undefined = '';
  // Variables for generating style ends


  constructor() { }

  ngOnInit(): void {
    this.createTableRow(3);

  }

  // Method for creating Row Array
  createTableRow(data: any) {
    this.userRows = []
    for (let index = 0; index < data; index++) {
      this.userRows.push(index)
    }
    this.codeForCreatingBlocks(this.userRows.length, this.userColumns.length)
  }

  // Method for creating Column Array
  createTableColumns(data: any) {
    this.userColumns = []
    for (let index = 0; index < data.target.value; index++) {
      this.userColumns.push(index + 1)
    }
    this.codeForCreatingBlocks(this.userRows.length, this.userColumns.length)
  }

  codeForCreatingBlocks(row: any, col: any) {
    this.userInputArray = []
    for (var i = 0; i < row; i++) {
      this.userInputArray.push([]);
      this.userInputArray[i].push(new Array(col));
      for (var j = 0; j < col; j++) {
        this.userInputArray[i][j] = `<td></td>`
      }
    }
    this.codeForCopyingData(row, col);
  }

  codeForCopyingData(mainArrayRow: any, mainArrayColumn: any) {
    if (this.checkFlag) {
      for (let i = 0; i < mainArrayRow && i < this.dataCopyArray.length; i++) {
        for (let j = 0; j < mainArrayColumn; j++) {
          if (this.dataCopyArray[i][j] != undefined) {
            this.userInputArray[i][j] = this.dataCopyArray[i][j];
          }
          if (this.dataCopyArray[i][j] == undefined) {
            this.userInputArray[i][j] = `<td></td>`
          }
        }
      }
      this.onGenerateRowAndColumn()
      this.dataCopyArray = [...this.userInputArray];
    }
    this.onGenerateRowAndColumn()
  }

  codeForUpdatingArrayOnInput(data: any, row: any, col: any) {
    for (var i = 0; i <= row; i++) {
      for (var j = 0; j <= col; j++) {
        if (i == row && j == col) {
          this.userInputArray[i][j] = `<td>${data.target.value}</td>`;
        }
      }
    }
    this.onGenerateRowAndColumn()
    this.dataCopyArray = [...this.userInputArray];
    this.checkFlag = true
  }

  // Method for generating Row and Column
  onGenerateRowAndColumn() {
    this.tableRowArr = []
    for (let i = 0; i < this.userInputArray.length; i++) {
      this.tableRowArr[i] = `<tr>${"\n"}${this.userInputArray[i].join("\n")}${"\n"}</tr>`
    }
    this.headerArr = [];
    for (let index = 1; index <= this.userColumns.length; index++) {
      this.headerArr.push(`<th>Header ${index}</th>`)
    }
    this.onGenerateHtmlForTable();
  }

  addGiveCssUsing(data: any) {
    if (data.target.value === 'class') {
      this.userCssSelector = '.demTable'
      this.showCssSelector = 'class="demTable"'
    }
    if (data.target.value === 'id') {
      this.userCssSelector = '#demTable'
      this.showCssSelector = 'id="demTable"'
    }
    if (data.target.value === 'tag') {
      this.userCssSelector = 'table'
    }
  }

  // Final CSS Generation
  onGenerateStyleForTable() {
    let generatedStyle =
      ` <style>
          ${this.userCssSelector} {
            padding:${this.userPadding + 'px'};
            width:${this.userWidth + 'px'};
            height:${this.userHeight + 'px'};
            border:${this.userBorderWidth + 'px'} ${this.userBorderStyle} ${this.userBorderColor};
            border-collapse:${this.userBorderCollapse};
            border-spacing:${this.userBorderSpacing + 'px'};
          }
          ${this.userCssSelector} th {
            padding:${this.userPadding + 'px'};
            border:${this.userBorderWidth + 'px'} ${this.userBorderStyle} ${this.userBorderColor};
            background-color:${this.userHeaderBgColor};
            color:${this.userHeaderFontColor};
          }
          ${this.userCssSelector}  td {
            border:${this.userBorderWidth + 'px'} ${this.userBorderStyle} ${this.userBorderColor};
            background-color:${this.userBodyBgColor};
            padding:${this.userPadding + 'px'};
            height:${this.userHeight + 'px'};
            color:${this.userBodyFontColor};
            text-align:${this.userTextAlign};
          }
        </style>`
    return generatedStyle;
  }

  // Final HTML Generation
  onGenerateHtmlForTable() {
    this.finalGeneratedTable =
      `
    <html>
      <head>
        <title>HTML Table Generator</title> 
        ${this.onGenerateStyleForTable()}
      </head>
      <body>
        <table ${this.showCssSelector}>
          <thead>
            <tr>
            ${"\n"}${this.headerArr.join("\n")}
            </tr>
          </thead>
          <tbody>
          `
    this.finalGeneratedTable = this.finalGeneratedTable +
      ` ${"\n"}${this.tableRowArr.join("\n")}
          </tbody>
        </table>
      </body>
    </html>
    `;
    this.outputText = this.finalGeneratedTable;
  }
}
