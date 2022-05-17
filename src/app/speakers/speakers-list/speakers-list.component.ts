import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeakersService } from 'src/app/speakers.service';
import { Speakers } from 'src/app/_modles/speakers';

@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.css']
})
export class SpeakersListComponent implements OnInit {

  public speakers:Speakers[] = [];
  public array:any = [];
  constructor(public router:Router,public ar:ActivatedRoute, public speakersServ:SpeakersService) { }

  ngOnInit(): void {
    this.speakersServ.getAllSpeakers().subscribe(data => {
      this.array = JSON.parse(JSON.stringify(data));
      console.log(this.array);
      this.speakers = this.array.speakers;
      console.log(this.speakers);
      
    }
  );
  }

  back(){
    this.router.navigate(['/admin']);
  }
  editSpeaker(sp:Speakers){
    this.router.navigate(['/speakers/edit',sp._id]);

  }
  deleteSpeaker(id:string){
    this.speakersServ.deleteSpeaker(id).subscribe(data=>{
      console.log(data);
      this.speakersServ.getAllSpeakers().subscribe(data => {
        this.array = JSON.parse(JSON.stringify(data));
        console.log(this.array);
        this.speakers = this.array.speakers;
        console.log(this.speakers);
        
      }
    );
    });
  }
 
}
