import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SbHeadingModule } from 'src/app/shared/sb-heading/sb-heading.module';
import { SbRelatedToolsModule } from 'src/app/shared/sb-related-tools/sb-related-tools.module';
import { RarFileExtractorComponent } from './rar-file-extractor.component';

const routes: Routes = [
  {
    path: '',
    component: RarFileExtractorComponent,
  },
];

@NgModule({
  declarations: [RarFileExtractorComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SbHeadingModule,
    SbRelatedToolsModule],
})
export class RarFileExtractorModule {}
