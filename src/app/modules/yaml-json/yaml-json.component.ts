import { Component, OnInit } from '@angular/core';
import { SEOService } from 'src/app/services/seo.service';
const YAML = require('yaml-js');

@Component({
  selector: 'app-yaml-json',
  templateUrl: './yaml-json.component.html',
  styleUrls: ['./yaml-json.component.scss'],
})  
export class YamlJsonComponent implements OnInit 
  {
        title = 'Online YAML or YML to JSON Convertor';
        subtitle ='We provide free online YAML or YML to JSON Convertor which will help many developers in their daily work.';
        constructor(private seo: SEOService) {}
        inputData:any;
        childInputText=''
        Data=''

        ngOnInit(): void {
          this.seo.setSEO(this.title, this.subtitle);
        }
  convert()
   {  
      try{            
            let obj=YAML.load(this.childInputText);
            this.Data=JSON.stringify(obj);
            this.inputData=JSON.stringify(JSON.parse(this.Data), null, 4);
            return this.inputData; 
          }catch(error){
              return this.inputData="Invalid YAML Input!!!";
          }         
    }  
  }
