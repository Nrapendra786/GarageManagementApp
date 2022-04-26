import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEducationComponent } from './create-education/create-education.component';
import { EditEducationComponent } from './edit-education/edit-education.component';
import { IndexEducationComponent } from './index-education/index-education.component';
import { ViewEducationComponent } from './view-education/view-education.component';

const routes: Routes = [
  { path: 'educations/index', component: IndexEducationComponent },
  { path: 'educations', component: IndexEducationComponent },
  { path: 'educations/:educationId/view', component: ViewEducationComponent },
  { path: 'educations/create', component: CreateEducationComponent },
  { path: 'educations/:educationId/edit', component: EditEducationComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
