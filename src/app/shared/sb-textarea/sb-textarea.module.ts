import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SbTextareaComponent } from './sb-textarea.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SbTextareaComponent],
  imports: [CommonModule,FormsModule],
  exports: [SbTextareaComponent],
})
export class SbTextareaModule {}
