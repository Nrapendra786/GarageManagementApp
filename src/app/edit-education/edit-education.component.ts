import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EducationModel } from '../education-model';
import { EducationService } from '../education.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.sass']
})
export class EditEducationComponent implements OnInit {

  id!: number;
  educationModel!: EducationModel;
  form!: FormGroup;
  
  constructor(public educationService: EducationService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
     this.id = this.route.snapshot.params['educationId'];
     this.educationService.find(this.id).subscribe((educationModel:EducationModel) => {
      this.educationModel = educationModel;
      console.log(this.educationModel);
    }); 

    this.form = new FormGroup({
      educationId: new FormControl('', [Validators.required]),
      isbn: new FormControl('', [Validators.required]),
      title: new FormControl(''),
      author : new FormControl(''),
      shortDescription : new FormControl(''),
      nodeIds : new FormControl('')
    });
  }

  get controls(){
    return this.form.controls;
  } 

  submit(){
    console.log();
    this.educationService.
         update(this.id, this.form.value).
         subscribe(res => {
          console.log('Education updated successfully!');
          this.router.navigateByUrl('educations');
         });
  }  


}
