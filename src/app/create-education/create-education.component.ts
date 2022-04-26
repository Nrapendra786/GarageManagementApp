import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EducationModel } from '../education-model';
import { EducationService } from '../education.service';

@Component({
  selector: 'app-create-education',
  templateUrl: './create-education.component.html',
  styleUrls: ['./create-education.component.sass']
})
export class CreateEducationComponent implements OnInit {

  form!: FormGroup;
  educationModel!: EducationModel;

  constructor(
    public educationService: EducationService,
    private router: Router,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      educationId: [null, [Validators.required]],
      isbn: [null, [Validators.required]],
      title: [null],
      author : [null],
      shortDescription : [null],
      nodeIds : [null]
    });
  }
  
  get f(){
    return this.form.controls;
  }
  
  submit() {
    this.educationService.create(this.form.value).subscribe(res => {
         console.log('Education created successfully!');
         this.router.navigateByUrl('educations');
    })
  }
}
