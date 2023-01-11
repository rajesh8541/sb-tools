import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-counter',
  templateUrl: './character-counter.component.html',
  styleUrls: ['./character-counter.component.scss']
})
export class CharacterCounterComponent implements OnInit {
  textInput : any;
  inputCharacterArray:any
  wordCount: any;
  totalWordsCount: any;
  totalSentenceCount: any;
  totalParagraphCount: any;
  removeParaLine: number =0;

  constructor() { }

  ngOnInit(): void {
  }
  onSearchChange(searchValue: any): void { 
    // Logic for counting characters
    this.textInput  = searchValue.target.value;
    this.inputCharacterArray = [...this.textInput]

    // Logic for counting words 
    this.wordCount = this.textInput ? this.textInput.split(/\s+/)  : 0;
    this.totalWordsCount = this.wordCount ? this.wordCount.length:0;

    // Logic for counting sentences
    this.totalSentenceCount = this.textInput.split('.')
   
    // Logic for counting paragraphs
    this.totalParagraphCount = this.textInput.split("\n\n");

    //Logic for removing extra spaces from char array while adding paragraph 
    this.removeParaLine = (this.totalParagraphCount.length - 1) * 2;
  }

}
