import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule } from '@angular/material/button';
import {MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [],
    exports: [FormsModule, MatDialogModule, MatFormFieldModule, 
              MatButtonModule, MatInputModule, MatCardModule, 
              MatSelectModule]
  ,
  imports: [
    CommonModule
  ]
})
export class MaterialModuleModule { }
