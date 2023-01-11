import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JsonFormatterComponent } from './json-formatter.component';
import { RouterModule, Routes } from '@angular/router';
import { SbHeadingModule } from 'src/app/shared/sb-heading/sb-heading.module';
import { SbTextareaModule } from 'src/app/shared/sb-textarea/sb-textarea.module';
import { SbRelatedToolsModule } from 'src/app/shared/sb-related-tools/sb-related-tools.module';

const routes: Routes = [
  {
    path: '',
    component: JsonFormatterComponent,
  },
];

@NgModule({
  declarations: [JsonFormatterComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SbHeadingModule,SbTextareaModule,
    SbRelatedToolsModule],
})
export class JsonFormatterModule {}
