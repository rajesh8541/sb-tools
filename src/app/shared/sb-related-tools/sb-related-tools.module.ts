import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SbRelatedToolsComponent } from './sb-related-tools.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SbRelatedToolsComponent],
  imports: [CommonModule, RouterModule],
  exports: [SbRelatedToolsComponent],
})
export class SbRelatedToolsModule {}
