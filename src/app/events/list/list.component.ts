import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/event.service';
import { Events } from 'src/app/_modles/events';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit , OnChanges {

  public events:Events[] = [];
  public array:any = [];
  constructor(public router:Router, public ar:ActivatedRoute ,public eventserv:EventService) { }

  ngOnInit(): void {
    this.eventserv.getAllEvents().subscribe(data => {
      this.array = JSON.parse(JSON.stringify(data));
      console.log(this.array);
      this.events = this.array.events;
      console.log(this.events);
     
    }
  );
  }
  ngOnChanges(){
    // this.ar.params.subscribe(data=>
    //   {
    //     this.events = data["events"];
    //   });
    //   console.log(this.events);
  }
  editEvent(id:number){
    this.router.navigate(['/event/edit',id]);

  }
  deleteEvent(id:number){
    this.eventserv.deleteEvent(id).subscribe(data=>{
      console.log(data);
      this.eventserv.getAllEvents().subscribe(data => {
        this.array = JSON.parse(JSON.stringify(data));
        console.log(this.array);
        this.events = this.array.events;
        console.log(this.events);
       
      }
    );
    });
  }
  detailsEvent(id:number){
   this.router.navigate(['/event/details',id]);
  }
  back(){
    this.router.navigate(['/admin']);
  }
}
