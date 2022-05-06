import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { Events } from 'src/app/_modles/events';
import { Speakers } from 'src/app/_modles/speakers';
import { Students } from 'src/app/_modles/students';
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  array:any=[];
  speakerId:string = "";
  studentId:number = 0;
  event=new Events(0,"","",new Speakers("","","",[],""),[],[]);
  constructor(public eventServ:EventService,public router:Router,public ar:ActivatedRoute) {
      // this.ar.params.subscribe(params=>{
      //   this.numberOfSpeakers=params['numberOfSpeakers'];
      //   this.numberOfStudents=params['numberOfStudents'];
      //   this.event=new Events(0,"","",new Speakers("","","",[],""),[],[]);
      //   this.event.otherSpeakersIds.fill(new Speakers("","","",[],""),0,this.numberOfSpeakers-1);
      //   this.event.studentsIds.fill(new Students(0,"",""),0,this.numberOfStudents-1);

      // });
    

    }

  ngOnInit(): void {
      
  }
  addEvent(){
    this.eventServ.addEvent(this.event).subscribe(data=>{
      console.log(data);
      this.array=data;
      console.log (this.array.message);
      //this.router.navigate(['/event']);
    })
  }
  addSpeakers(){
    this.eventServ.addSpeakerToEvent(this.event._id,this.speakerId).subscribe(data=>{
      console.log(data);
    });
  }
  addStudents(){
    this.eventServ.addStudentToEvent(this.event._id,this.studentId).subscribe(data=>{
      console.log(data);
    });
  }
  save(){
    this.router.navigate(['/event']);
  }
}
