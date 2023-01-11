import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file.service';
import { SEOService } from 'src/app/services/seo.service';
const URL = '';

@Component({
  selector: 'app-pdf-password-remover',
  templateUrl: './pdf-password-remover.component.html',
  styleUrls: ['./pdf-password-remover.component.scss'],
})
export class PdfPasswordRemoverComponent implements OnInit {
  title = 'Online PDF Password Remover';
  subtitle =
    'We provide free online PDF Password Remover which will help many people in their daily work.';

  constructor(private fileService: FileService, private seo: SEOService) {}

  ngOnInit(): void {
    this.seo.setSEO(this.title, this.subtitle);
    this.fileService.getFile();
  }

  uploadFiles(): void {
    
  }
}
