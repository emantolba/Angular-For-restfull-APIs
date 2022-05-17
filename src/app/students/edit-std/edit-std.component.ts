import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Students } from 'src/app/_modles/students';

@Component({
  selector: 'app-edit-std',
  templateUrl: './edit-std.component.html',
  styleUrls: ['./edit-std.component.css']
})
export class EditStdComponent implements OnInit {

  public array:any =[];
  public std:boolean = false;
  public student:Students =new Students(0,"","");
  constructor(public stdSrev:StudentService,public router:Router,public ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.params.subscribe(data=>{
      this.stdSrev.getStudentById(data["id"]).subscribe(data=>{
        this.array = JSON.parse(JSON.stringify(data));
        console.log(this.array);
        this.student = this.array.student;
        console.log(this.student);
        if(this.ar.snapshot.url[0].path=="admin"){
          console.log("admin");
          this.std = false;
        }
        else{
          console.log("student");
          this.std = true;
        }
      })
  });
    
   
 
  }

  edit(){
    this.stdSrev.updateStudent(this.student).subscribe(data=>{
      this.array = JSON.parse(JSON.stringify(data));
      this.student = this.array.student;
      console.log(this.student);
      if(this.std){
        this.router.navigate(['/students/'+this.student._id]);
      }
      else{
        this.router.navigate(['/admin/student']);
      }
     
    });
  } 
}
