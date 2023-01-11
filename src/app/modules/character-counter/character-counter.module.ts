import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterCounterComponent } from './character-counter.component';
import { RouterModule, Routes } from '@angular/router';
import { SbTextareaModule } from 'src/app/shared/sb-textarea/sb-textarea.module';

const routes: Routes = [
  {
    path: '',
    component: CharacterCounterComponent,
  },
];


@NgModule({
  declarations: [
    CharacterCounterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SbTextareaModule
  ]
})
export class CharacterCounterModule { }
