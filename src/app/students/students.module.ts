import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StdlistComponent } from './stdlist/stdlist.component';
import { EditStdComponent } from './edit-std/edit-std.component';
import { FormsModule } from '@angular/forms';
import { StdEventsComponent } from './std-events/std-events.component';



@NgModule({
  declarations: [
    StdlistComponent,
    EditStdComponent,
    StdEventsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    StdlistComponent,
    EditStdComponent,
    StdEventsComponent
  ]
})
export class StudentsModule { }
