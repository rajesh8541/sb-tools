import { Component, OnInit } from '@angular/core';
import { SEOService } from 'src/app/services/seo.service';

const YAML = require('json-to-pretty-yaml');

@Component({
  selector: 'app-json-yaml',
  templateUrl: './json-yaml.component.html',
  styleUrls: ['./json-yaml.component.scss'],
})
export class JsonYamlComponent implements OnInit {
  title = 'Online Json to YAML or YML Convertor';
  subtitle =
    'We provide free online Json to YAML or YML Convertor which will help many developers in their daily work.';
  doc: any;
  constructor(private seo: SEOService) {}
  
  childInputText=''
  inputData=''
  
  ngOnInit(): void {
    this.seo.setSEO(this.title, this.subtitle);
  }
  convert()
  {    
             try
             { 
              let obj = JSON.parse(this.childInputText); 
              this.inputData = YAML.stringify(obj); 
              return this.inputData;
             }catch
             {
              return  this.inputData="Invalid JSON Input";
             }        
  }
}


