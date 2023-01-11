import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlTableGeneratorComponent } from './html-table-generator.component';
import { RouterModule, Routes } from '@angular/router';
import { SbHeadingModule } from 'src/app/shared/sb-heading/sb-heading.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SbTextareaModule } from 'src/app/shared/sb-textarea/sb-textarea.module';

const routes: Routes = [
  {
    path: '',
    component: HtmlTableGeneratorComponent,
  },
];

@NgModule({
  declarations: [
    HtmlTableGeneratorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SbHeadingModule,
    SbTextareaModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HtmlTableGeneratorModule { }
