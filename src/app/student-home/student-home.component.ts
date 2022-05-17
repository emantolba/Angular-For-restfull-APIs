import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../event.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {

  stdId:string="";
  constructor(public router:Router,public ar:ActivatedRoute, public stdServ:StudentService, public evetServ:EventService) { }

  ngOnInit(): void {
  }
  EditStudent(){
    this.ar.params.subscribe(params=>{
      this.stdId = params['id'];
      this.router.navigate(['/std/students/edit',this.stdId]);
    });
  }
  getEventsForStudent(){
    this.ar.params.subscribe(params=>{
      this.stdId = params['id'];
      this.router.navigate(['/std/students/events',this.stdId]);
    });
  }
}
