import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { Events } from 'src/app/_modles/events';

@Component({
  selector: 'app-speaker-events',
  templateUrl: './speaker-events.component.html',
  styleUrls: ['./speaker-events.component.css']
})
export class SpeakerEventsComponent implements OnInit {

  array:any =[];
  events:Events[] = [];
  stdID:string="";
  constructor(public ar:ActivatedRoute,public eveServ:EventService,public router:Router) { }

  ngOnInit(): void {
    this.ar.params.subscribe(data=>{
       this.stdID = data["id"];
      console.log(data);
      this.eveServ.getEventsForSpeakers(this.stdID).subscribe(data=>{
        this.array = JSON.parse(JSON.stringify(data));
        console.log(this.array);
        this.events = this.array.events;
      });
    });
  }
  back(){
    this.router.navigate(['/speakers',this.stdID]);
  }
  remove(id:number,stdID:string){
    this.eveServ.speakerDeclineEvent(id,stdID).subscribe(data=>{
      this.array = JSON.parse(JSON.stringify(data));
      console.log(this.array.message);
      this.eveServ.getEventsForSpeakers(this.stdID).subscribe(data=>{
        this.array = JSON.parse(JSON.stringify(data));
        console.log(this.array);
        this.events = this.array.events;
      }
      );
    });
  }
}
