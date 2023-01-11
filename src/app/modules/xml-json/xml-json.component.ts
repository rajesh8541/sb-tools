import { Component, OnInit } from '@angular/core';
import { SEOService } from 'src/app/services/seo.service';
import { NgxXml2jsonService } from 'ngx-xml2json';
@Component({
  selector: 'app-xml-json',
  templateUrl: './xml-json.component.html',
  styleUrls: ['./xml-json.component.scss'],
})
export class XmlJsonComponent implements OnInit {
  title = 'Online XML to JSON Convertor';
  subtitle =
    'We provide free online XML to JSON Convertor which will help many developers in their daily work.';

  childInputText = '';
  result = '';
  outputText = '';
  constructor(
    private seo: SEOService,
    private ngxXml2jsonService: NgxXml2jsonService
  ) {}

  ngOnInit(): void {
    this.seo.setSEO(this.title, this.subtitle);
  }

  convert(): void {
    let inputText = this.childInputText;
    const parser = new DOMParser();
    let inputText2 = inputText.replace("<?xml version='1.0'?>","");
    const xml = parser.parseFromString(inputText2.replace(/\s/g, ''), 'text/xml');
    const errorMsg = xml.querySelector('parsererror')
    console.log(errorMsg)
    if(errorMsg){
      this.outputText = 'INVALID XML INPUT';
    }else{
      let xml_ = parser.parseFromString(inputText2.replace(/\s/g, ''), 'text/xml');
      const err = xml_.querySelector('parsererror')
      if(err){
        this.outputText = 'INVALID XML INPUT';
      }else{
        const obj = this.ngxXml2jsonService.xmlToJson(xml_);
        this.outputText = JSON.stringify(obj, null, 4);
      }
    }
  }

  onCopy(): void {
    console.log('Asd');
  }

  clearOutputData(): void {
    console.log('Asd');
  }
}
