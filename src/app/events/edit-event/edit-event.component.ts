import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/event.service';

import { Events } from 'src/app/_modles/events';
import { Speakers } from 'src/app/_modles/speakers';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit,OnChanges{
  event:Events = new Events(0,"","",new Speakers("","","",[],""),[],[]);
  array:any = [];
  speakerId:string="";
  studentId:number=0;
  constructor(public eventServ:EventService,public ar:ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
    this.ar.params.subscribe(data=>{
      this.eventServ.getEventById(data["id"]).subscribe(data=>{
        this.array = JSON.parse(JSON.stringify(data));
        console.log(this.array);
        this.event = this.array.event;
        console.log(this.event);
      })
  })}
  ngOnChanges(): void {
    this.ar.params.subscribe(data=>{
      this.eventServ.getEventById(data["id"]).subscribe(data=>{
        this.array = JSON.parse(JSON.stringify(data));
        console.log(this.array);
        this.event = this.array.event;
        console.log(this.event);
      })
  })
  }
  updateEvent(){
    this.eventServ.updateEvent(this.event).subscribe(data=>{
      console.log(data);
      this.router.navigate(['/event']);
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
  removeStudent(id:number){
    this.eventServ.removeStudentFromEvent(this.event._id,id).subscribe(data=>{
      console.log(data);
    });
  }
  removeSpeakers(id:string){
    this.eventServ.removeSpeakerFromEvent(this.event._id,id).subscribe(data=>{
      console.log(data);
    });
  }
}
