import { Component, OnInit } from '@angular/core';
import { Speakers } from 'src/app/_modles/speakers';
import { Add } from 'src/app/_modles/address';
import { SpeakersService } from 'src/app/speakers.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-speakers-edit',
  templateUrl: './speakers-edit.component.html',
  styleUrls: ['./speakers-edit.component.css']
})
export class SpeakersEditComponent implements OnInit {
  
  speaker:Speakers = new Speakers("","","",[],"");
  sp:boolean=false;
  array:any = [];
  constructor(public speakerServ:SpeakersService,public ar:ActivatedRoute,public router:Router) { }

  ngOnInit(): void {
    this.speakerServ.getSpeakerByID(this.ar.snapshot.params["id"]).subscribe(data=>{
      this.array = JSON.parse(JSON.stringify(data));
      console.log(this.array);
      this.speaker= this.array.speaker;
      if(this.ar.snapshot.url[0].path=="admin"){
        console.log("admin");
       this.sp=false;
      }
      else{
        console.log("student");
        this.sp=true;
      }
      console.log(this.speaker.Address);
  })}
  save(){
    this.speakerServ.editSpeakers(this.speaker).subscribe(data=>{
      this.array=JSON.parse(JSON.stringify(data));
      console.log(this.array.message);})
      if(this.sp){
        this.router.navigate(['/speakers/'+this.speaker._id]);
      }
      else{
        this.router.navigate(['/speakers']);
      }
     ;
  }
}
