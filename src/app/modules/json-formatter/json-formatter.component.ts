
import { Component, OnInit } from '@angular/core';
import { SEOService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-json-formatter',
  templateUrl: './json-formatter.component.html',
  styleUrls: ['./json-formatter.component.scss'],
})
export class JsonFormatterComponent implements OnInit {
            
  title = 'Online Json Formatter, Prettier and Validator';
  subtitle ='We provide free online JSON Formatter, Prettier and Validator which will help many developers in their daily work.';
  example =`{"name":"John", "age":30, "car":null}`;

childInputText='';
formatted_input:any;
constructor(private seo: SEOService) {}

ngOnInit(): void {
  this.seo.setSEO(this.title, this.subtitle);
}
convert ()
  {  
    try{
    
        JSON.parse(this.childInputText);
        this.formatted_input = JSON.stringify(JSON.parse(this.childInputText), null, 4);
        return this.formatted_input;
        }
        catch(error){
        return this.formatted_input="Invalid JSON Input!!!"; 
        }
  }
}


