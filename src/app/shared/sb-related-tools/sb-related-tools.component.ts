import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sb-related-tools',
  templateUrl: './sb-related-tools.component.html',
  styleUrls: ['./sb-related-tools.component.scss'],
})
export class SbRelatedToolsComponent implements OnInit {
  relatedTools = [
    { title: 'XML Formatter', slug: '/xml-formatter/' },
    { title: 'JSON Formatter', slug: '/json-formatter/' },
    { title: 'YAML Formatter', slug: '/yaml-formatter/' },
  ];

  constructor() {}

  ngOnInit(): void {}
}

