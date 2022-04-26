

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Education } from './education';
import { EducationModel } from './education-model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  private apiURL = "https://jsonplaceholder.typicode.com";

  
  private apiEducationURL = "http://localhost:8080";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient) { }

  getAllEducations(): Observable<EducationModel[]> {
    return this.httpClient.get<EducationModel[]>(this.apiEducationURL + '/educations')
    .pipe(
      catchError(this.errorHandler)
    )
  }


  create(education: EducationModel): Observable<EducationModel> {
    
    education.nodeIds = ["ABGh89760","BAGh89769"];
    

    const body = JSON.stringify(education);
    return this.httpClient.post<any>('http://localhost:8080/educations/',body,this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  

  find(id: number): Observable<EducationModel> {
    return this.httpClient.get<EducationModel>(this.apiEducationURL + '/educations/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id : number, education : EducationModel): Observable<EducationModel> {
    return this.httpClient.put<EducationModel>(this.apiEducationURL + '/educations/' + id, JSON.stringify(education), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id : number){
    return this.httpClient.delete<EducationModel>(this.apiEducationURL + '/educations/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(() => errorMessage);
 }

}
