import { Component, OnInit } from '@angular/core';
import { SEOService } from 'src/app/services/seo.service';
const format = require('xml-formatter');

@Component({
  selector: 'app-xml-formatter',
  templateUrl: './xml-formatter.component.html',
  styleUrls: ['./xml-formatter.component.scss'],
})
export class XmlFormatterComponent implements OnInit {
  title = 'Online XML Formatter, Prettier and Validator';
  subtitle =
    'We provide free online XML Formatter, Prettier and Validator which will help many developers in their daily work.';
  constructor(private seo: SEOService) {}

  childInputText = '';
  outputText='';

  ngOnInit(): void {
    this.seo.setSEO(this.title, this.subtitle);
  }

  convert() {
    var domParser = new DOMParser();
    var xml = domParser.parseFromString(this.childInputText, 'text/xml');
    const errorMsg = xml.querySelector('parsererror');
    if (errorMsg) {
      this.outputText = 'INVALID XML INPUT';
    } else {
      this.outputText = format(this.childInputText);
    }
  }
}
