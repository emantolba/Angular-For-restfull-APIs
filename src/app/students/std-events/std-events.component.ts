import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { Events } from 'src/app/_modles/events';

@Component({
  selector: 'app-std-events',
  templateUrl: './std-events.component.html',
  styleUrls: ['./std-events.component.css']
})
export class StdEventsComponent implements OnInit {

  array:any =[];
  events:Events[] = [];
  stdID:number=0;
  constructor(public ar:ActivatedRoute,public eveServ:EventService,public router:Router) { }

  ngOnInit(): void {
    this.ar.params.subscribe(data=>{
       this.stdID = data["id"];
      console.log(data);
      this.eveServ.getEventsForStudent(this.stdID).subscribe(data=>{
        this.array = JSON.parse(JSON.stringify(data));
        console.log(this.array);
        this.events = this.array.events;
      });
    });
  }
  back(){
    this.router.navigate(['/students',this.stdID]);
  }
}
