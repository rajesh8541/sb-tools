import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Base64ImageComponent } from './base64-image.component';
import { RouterModule, Routes } from '@angular/router';
import { SbTextareaModule } from 'src/app/shared/sb-textarea/sb-textarea.module';
import { SbHeadingModule } from 'src/app/shared/sb-heading/sb-heading.module';

const routes: Routes = [
    {
      path: '',
      component: Base64ImageComponent,
    },
  ];
  
  @NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forChild(routes), SbHeadingModule,SbTextareaModule,
      ],
  })
  export class Base64ImageModule {}
  