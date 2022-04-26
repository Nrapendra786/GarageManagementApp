import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from '../education';
import { EducationModel } from '../education-model';
import { EducationService } from '../education.service';

@Component({
  selector: 'app-view-education',
  templateUrl: './view-education.component.html',
  styleUrls: ['./view-education.component.sass']
})
export class ViewEducationComponent implements OnInit {
  
  id!: number;
  educationModel!: EducationModel;
  

  constructor(public educationService: EducationService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
     this.id = this.route.snapshot.params['educationId'];
     this.educationService.find(this.id).subscribe((educationModel:EducationModel) => {
      this.educationModel = educationModel;
      console.log(this.educationModel);
    }); 
  }
}
