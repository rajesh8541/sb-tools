import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcelHtmlComponent } from './excel-html.component';
import { RouterModule, Routes } from '@angular/router';
import { SbHeadingModule } from 'src/app/shared/sb-heading/sb-heading.module';
import { SbTextareaModule } from 'src/app/shared/sb-textarea/sb-textarea.module';
import { SbRelatedToolsModule } from 'src/app/shared/sb-related-tools/sb-related-tools.module';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: ExcelHtmlComponent,
  },
];

@NgModule({
  declarations: [ExcelHtmlComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SbHeadingModule,SbTextareaModule,
    SbRelatedToolsModule,FormsModule],
})
export class ExcelHtmlModule {}
