import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Events } from './_modles/events';
@Injectable({
  providedIn: 'root'
})
export class EventService {
  
  constructor(public http: HttpClient) { }
  baseURL="http://localhost:8080/events";
  getAllEvents(){
    return this.http.get(this.baseURL);
  }
  updateEvent(event:Events){
    
    return this.http.put(this.baseURL,{ "id":event._id,
    "title":event.title,
    "eventDate":event.eventDate,
    "mainSpeakerId": event.mainSpeakerId._id,
    "otherSpeakersIds":event.otherSpeakersIds.map(speaker=>speaker._id),
    "studentsIds":event.studentsIds.map(student=>student._id)});
  }
  getEventById(id:number){
    return this.http.get(this.baseURL+"/"+id);
  }
  addEvent(event:Events){
    return this.http.post(this.baseURL,{
      "id":event._id,
      "title":event.title,
      "eventDate":event.eventDate,
      "mainSpeakerId": event.mainSpeakerId._id,
      "otherSpeakersIds":event.otherSpeakersIds.map(speaker=>speaker._id),
      "studentsIds":event.studentsIds.map(student=>student._id)
    });
  }
  addSpeakerToEvent(eventId:number,speakerId:string){
    return this.http.post(this.baseURL+"/addspeaker",{
      "id":eventId,
      "speakerId":speakerId
    });
  }
  addStudentToEvent(eventId:number,studentId:number){
    return this.http.post(this.baseURL+"/addstudent",{
      "id":eventId,
      "studentId":studentId
    });
  }
  deleteEvent(id:number){
    return this.http.delete(this.baseURL,{"body":{
      "id":id
    }});
  }
}
