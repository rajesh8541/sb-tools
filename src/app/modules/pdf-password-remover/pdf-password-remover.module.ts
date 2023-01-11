import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PdfPasswordRemoverComponent } from './pdf-password-remover.component';
import { SbHeadingModule } from 'src/app/shared/sb-heading/sb-heading.module';
import { SbRelatedToolsModule } from 'src/app/shared/sb-related-tools/sb-related-tools.module';

const routes: Routes = [
  {
    path: '',
    component: PdfPasswordRemoverComponent,
  },
];
@NgModule({
  declarations: [PdfPasswordRemoverComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SbHeadingModule,
    SbRelatedToolsModule,
  ],
})
export class PdfPasswordRemoverModule {}
