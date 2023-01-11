import { Component, OnInit } from '@angular/core';
import { SEOService } from 'src/app/services/seo.service';

@Component({
  selector: 'app-rar-file-extractor',
  templateUrl: './rar-file-extractor.component.html',
  styleUrls: ['./rar-file-extractor.component.scss'],
})
export class RarFileExtractorComponent implements OnInit {
  title = 'Online RAR file extractor';
  subtitle =
    'We provide free online RAR file extractor which will help many people in their daily work.';
  constructor(private seo: SEOService) {}

  ngOnInit(): void {
    this.seo.setSEO(this.title, this.subtitle);
  }

  fileChanged(event: any): void {}
}
