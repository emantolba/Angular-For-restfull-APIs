import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { Events } from 'src/app/_modles/events';
import { Speakers } from 'src/app/_modles/speakers';
@Component({
  selector: 'app-details-event',
  templateUrl: './details-event.component.html',
  styleUrls: ['./details-event.component.css']
})
export class DetailsEventComponent implements OnInit {
  event:Events=new Events(0,"","",new Speakers("","","",[],""),[],[]);
  array:any = [];
  constructor(public router:Router,public eventServ:EventService,public ar:ActivatedRoute) { }

  ngOnInit(): void {
    this.ar.params.subscribe(data=>
      {
        this.event._id = data["id"];
        this.eventServ.getEventById(this.event._id).subscribe(d=>{
          this.array = d;
          this.event = this.array.event;
          console.log(this.event);
        });
      });
      
  }

}
