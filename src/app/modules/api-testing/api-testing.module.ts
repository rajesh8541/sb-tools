import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiTestingComponent } from './api-testing.component';
import { RouterModule, Routes } from '@angular/router';
import { SbHeadingModule } from 'src/app/shared/sb-heading/sb-heading.module';
import { SbTextareaModule } from 'src/app/shared/sb-textarea/sb-textarea.module';
import { SbRelatedToolsModule } from 'src/app/shared/sb-related-tools/sb-related-tools.module';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: ApiTestingComponent,
  },
];

@NgModule({
  declarations: [ApiTestingComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SbHeadingModule,SbTextareaModule,
    SbRelatedToolsModule,FormsModule,HttpClientModule,ReactiveFormsModule],
})
export class ApiTestingModule {}
