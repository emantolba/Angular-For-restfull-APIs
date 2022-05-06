import { Component, OnChanges, OnInit } from '@angular/core';
import { Events } from 'src/app/_modles/events';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { Address } from 'src/app/_modles/address';
import { Speakers } from 'src/app/_modles/speakers';
import { Students } from 'src/app/_modles/students';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit,OnChanges {
  numberOfSpeakers:number = 0;
  numberOfStudents:number = 0;
 
  constructor(public eventServ:EventService,public router:Router) { }

  ngOnInit(): void {

  }
  
  createEvent(){
    // this.event.otherSpeakersIds.fill(new Speakers("","","",[],""),0,this.numberOfSpeakers-1);
    // this.event.studentsIds.fill(new Students(0,"",""),0,this.numberOfStudents-1);

    this.router.navigateByUrl('/event/'+this.numberOfSpeakers+'/'+this.numberOfStudents);
  }
  ngOnChanges(): void {}

}
