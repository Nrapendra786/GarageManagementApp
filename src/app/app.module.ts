import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEducationComponent } from './create-education/create-education.component';
import { EditEducationComponent } from './edit-education/edit-education.component';
import { ViewEducationComponent } from './view-education/view-education.component';
import { IndexEducationComponent } from './index-education/index-education.component';
import { EducationService } from './education.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './material-module/material-module.module';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    CreateEducationComponent,
    EditEducationComponent,
    ViewEducationComponent,
    IndexEducationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    MatDialogModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    MatInputModule,
    MatCardModule,
    MatSelectModule,
  ],
  providers: [EducationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
