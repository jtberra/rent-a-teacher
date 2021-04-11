import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CursoFormComponent } from './curso-form.component';



@NgModule({
  declarations: [CursoFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[CursoFormComponent]

})
export class CursoFormModule { }
