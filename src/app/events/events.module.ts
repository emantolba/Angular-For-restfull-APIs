import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { FormsModule } from '@angular/forms';
import { AddEventComponent } from './add-event/add-event.component';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { DetailsEventComponent } from './details-event/details-event.component';



@NgModule({
  declarations: [
    ListComponent,
    EditEventComponent,
    AddEventComponent,
    CreateEventComponent,
    DetailsEventComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ListComponent,
    EditEventComponent,
    AddEventComponent,
    CreateEventComponent
  ]
})
export class EventsModule { }
