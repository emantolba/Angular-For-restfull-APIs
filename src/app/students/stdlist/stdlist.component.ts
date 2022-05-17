import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/student.service';
import { Students } from 'src/app/_modles/students';
@Component({
  selector: 'app-stdlist',
  templateUrl: './stdlist.component.html',
  styleUrls: ['./stdlist.component.css']
})
export class StdlistComponent implements OnInit {

  public students:Students[]=[];
  public array:any =[];
  constructor(public router:Router, public ar:ActivatedRoute ,public stdServ:StudentService) { }

  ngOnInit(): void {
    this.stdServ.getAllStudents().subscribe(data => {
      this.array = JSON.parse(JSON.stringify(data));
      this.students = this.array.students;
      console.log(this.students);
    
  });}
  editStudent(id:number){
    this.router.navigate(['/admin/student/edit',id]);
    
  }
  back(){
    this.router.navigate(['/admin']);
  }
  deleteStudent(id:number){
    this.stdServ.deleteStudent(id).subscribe(data=>{
      this.array = JSON.parse(JSON.stringify(data));
      console.log(this.array.message);
      this.stdServ.getAllStudents().subscribe(data => {
        this.array = JSON.parse(JSON.stringify(data));
        this.students = this.array.students;
        console.log(this.students);
      });
    });
  }

}
