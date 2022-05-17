import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { User } from '../_modles/user';
import { Token } from '../token';
import { EventService } from '../event.service';
import { Events } from '../_modles/events';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:User = new User("","");
  public role = "";
  public adminD = "none";
  public student = "none";
  public speaker ="none";
  public token:string = "";
  public events:Events[] = [];
  public key = "evens";
  public array :any  = [];
  constructor(public loginSer:LoginService,public eventserv:EventService,public router:Router) { }
  ngOnInit(): void {
  }
  login(){
    this.loginSer.login(this.user).subscribe(
      res=>{
        console.log(res);
        JSON.parse(JSON.stringify(res),(key,value)=>{
          if(key=="token"){
            localStorage.setItem("token",value);
            this.token = value;
          }
        });
        JSON.parse(JSON.stringify(res),(key,value)=>{
          if(key=="message"){
           this.role = value;
           console.log(this.role);
          }
        });
        console.log(this.token);
        if(this.role=="Admin login successfully!"){
          this.adminD = "block";
          this.router.navigate(['/admin']);
        }
        else if(this.role=="Student login successfully!"){
          this.array = JSON.parse(JSON.stringify(res));
          console.log(this.array);
          this.router.navigate(['/students',this.array.user._id]);
        }
        else if(this.role=="Speaker login successfully!"){
          this.array = JSON.parse(JSON.stringify(res));
          console.log(this.array);
          this.router.navigate(['/speakers',this.array.user._id]);
        }
      },
      err=>{
        console.log(err);
      }
    )
   

  }
  eventList(){
    this.router.navigate(['/event']);
    
  }
  
}

