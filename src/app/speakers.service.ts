import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Add } from './_modles/address';
import { Speakers } from './_modles/speakers';
@Injectable({
  providedIn: 'root'
})
export class SpeakersService {

  constructor(public http:HttpClient) { }
  baseURL="http://localhost:8080/speakers";
  getAllSpeakers(){
    return this.http.get(this.baseURL);
  }
  deleteSpeaker(id:string){
    return this.http.delete(this.baseURL,{'body':{
      "id":id
    }});
  }
  editSpeakers(sp:Speakers){
    return this.http.put(this.baseURL,{
      "id":sp._id,
      "email":sp.email,
      "userName":sp.userName,
      "password":sp.password,
      "Address":sp.Address.map(add=>{
        return {
          "city":add.city,
          "street":add.street,
          "building":add.building,
          "_id":add._id
        }
      }
      )
    });
  }
  getSpeakerByID(id:string){
    return this.http.get(this.baseURL+"/"+id);
  }
}
