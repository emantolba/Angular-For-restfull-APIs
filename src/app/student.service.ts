import { Injectable } from '@angular/core';
import { HttpClient, HttpContext } from '@angular/common/http';
import { Students } from './_modles/students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(public http:HttpClient) { }
  baseURL="http://localhost:8080/students";

  getAllStudents(){
    return this.http.get(this.baseURL);
  }
  updateStudent(student:Students){
    return this.http.put(this.baseURL+"/"+student._id,{
      "id":student._id,
      "email":student.email,
      "password":student.password,
    });
  }
  getStudentById(id:number){
    return this.http.get(this.baseURL+"/"+id);
  }
  deleteStudent(id:number){
    return this.http.delete(this.baseURL+"/"+id,{"body":{
      "id":id}});
    }
}
