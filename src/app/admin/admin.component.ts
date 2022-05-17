import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  eventList(){
    this.router.navigate(['/event']);
    
  }
  studentList(){
    this.router.navigate(['/admin/student']);
  }
  speakersList(){
    this.router.navigate(['/speakers']);
  }
}
