import { Component, OnInit } from '@angular/core';
import { SEOService } from 'src/app/services/seo.service';
const YAML = require('yaml-js');

@Component({
  selector: 'app-yaml-formatter',
  templateUrl: './yaml-formatter.component.html',
  styleUrls: ['./yaml-formatter.component.scss'],
})
export class YamlFormatterComponent implements OnInit {
  title = 'Online YAML Formatter, Prettier and Validator';
  subtitle ='We provide free online YAML Formatter, Prettier and Validator which will help many developers in their daily work.';
    childInputText=''
    inputData=''
    Data=''
    constructor(private seo: SEOService) {}

  ngOnInit(): void {
    this.seo.setSEO(this.title, this.subtitle);
  }

  convert(){
     
            try{            
              let obj=YAML.load(this.childInputText);
              this.Data=JSON.stringify(obj);
              return this.inputData=this.childInputText; 
            }catch(error){
                return this.inputData="Invalid YAML Input!!!";
            }
          }
}
