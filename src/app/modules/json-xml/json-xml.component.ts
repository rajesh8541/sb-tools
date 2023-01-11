import { Component, OnInit } from '@angular/core';
import { SEOService } from 'src/app/services/seo.service';
const js2xmlparser = require('js2xmlparser');

@Component({
  selector: 'app-json-xml',
  templateUrl: './json-xml.component.html',
  styleUrls: ['./json-xml.component.scss'],
})
export class JsonXmlComponent implements OnInit {
  title = 'Online Json to XML Convertor';
  subtitle =
    'We provide free online Json to XML Convertor which will help many developers in their daily work.';
  constructor(private seo: SEOService) {}

  childInputText = '';

  ngOnInit(): void {
    this.seo.setSEO(this.title, this.subtitle);
  }

  outputText = '';
  convert() {
    try {
      JSON.parse(this.childInputText);
      this.outputText = js2xmlparser.parse(
        'root',
        JSON.parse(this.childInputText)
      );
    } catch (err) {
      this.outputText = 'INVALID JSON INPUT';
    }
  }
}
