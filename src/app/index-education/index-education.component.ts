import { Component, Input, OnInit } from '@angular/core';
import { Education } from '../education';
import { EducationModel } from '../education-model';
import { EducationService } from '../education.service';

@Component({
  selector: 'app-delete-education',
  templateUrl: './index-education.component.html',
  styleUrls: ['./index-education.component.sass']
})
export class IndexEducationComponent implements OnInit {

  id!: number;
  educations: EducationModel[] = [];


  constructor(private educationService : EducationService) { }

  ngOnInit(): void {
    this.educationService.getAllEducations().subscribe((data: EducationModel[]) => {
      this.educations=data;
      console.log(this.educations);
    });
  }


  deletePost(id:number){
    this.educationService.delete(id).subscribe(res => {
         this.educations = this.educations.filter(item => item.educationId !== id);
         console.log('Post deleted successfully!');
    })
  }


}
