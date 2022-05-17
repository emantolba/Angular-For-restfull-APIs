import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-speaker-home',
  templateUrl: './speaker-home.component.html',
  styleUrls: ['./speaker-home.component.css']
})
export class SpeakerHomeComponent implements OnInit {

  constructor(public ar:ActivatedRoute,public router:Router) { }
  spID:string="";
  ngOnInit(): void {
  }
  EditSpeaker(){
    this.ar.params.subscribe(params=>{
      this.spID = params['id'];
      this.router.navigate(['/sp/speakers/edit',this.spID]);
    });
  }
  getEventsForSpeaker(){
    this.ar.params.subscribe(params=>{
      this.spID = params['id'];
      this.router.navigate(['/sp/speakers/events',this.spID]);
    });
  }
}
