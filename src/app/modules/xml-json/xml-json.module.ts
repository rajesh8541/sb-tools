import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XmlJsonComponent } from './xml-json.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SbTextareaModule } from 'src/app/shared/sb-textarea/sb-textarea.module';
import { SbHeadingModule } from 'src/app/shared/sb-heading/sb-heading.module';
import { SbRelatedToolsModule } from 'src/app/shared/sb-related-tools/sb-related-tools.module';

const routes: Routes = [
  {
    path: '',
    component: XmlJsonComponent,
  },
];
@NgModule({
  declarations: [XmlJsonComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    SbTextareaModule,
    SbHeadingModule,
    SbRelatedToolsModule,
  ],
})
export class XmlJsonModule {}
