import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentDTO } from '../modelService/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  public getListStudent():Observable<StudentDTO[]>{
    return this.http.get<StudentDTO[]>("http://localhost:8082/students");
  }

  public saveStudent(data:StudentDTO):Observable<StudentDTO>{
    return this.http.post<StudentDTO>("http://localhost:8082/students",data);
  }
}
