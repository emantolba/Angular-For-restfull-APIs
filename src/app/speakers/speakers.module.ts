import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakersListComponent } from './speakers-list/speakers-list.component';
import { SpeakersEditComponent } from './speakers-edit/speakers-edit.component';
import { FormsModule } from '@angular/forms';
import { SpeakerEventsComponent } from './speaker-events/speaker-events.component';



@NgModule({
  declarations: [
    SpeakersListComponent,
    SpeakersEditComponent,
    SpeakerEventsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    SpeakersListComponent,
    SpeakersEditComponent
  ]
})
export class SpeakersModule { }
