import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './events/list/list.component';
import { HomeComponent } from './home/home.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { DetailsEventComponent } from './events/details-event/details-event.component';
import { AdminComponent } from './admin/admin.component';
import { StdlistComponent } from './students/stdlist/stdlist.component';
import { EditStdComponent } from './students/edit-std/edit-std.component';
import { SpeakersListComponent } from './speakers/speakers-list/speakers-list.component';
import { SpeakersEditComponent } from './speakers/speakers-edit/speakers-edit.component';
import { StudentHomeComponent } from './student-home/student-home.component';
import { StdEventsComponent } from './students/std-events/std-events.component';
import { SpeakerHomeComponent } from './speaker-home/speaker-home.component';
import { SpeakerEventsComponent } from './speakers/speaker-events/speaker-events.component';

const routes: Routes = [
  {path: 'event',component: ListComponent},
  {path: 'event/add',component:  CreateEventComponent},
  {path: 'event/edit/:id',component: EditEventComponent},
  {path: 'home',component: HomeComponent},
  {path:'event/details/:id',component: DetailsEventComponent},
  {path: 'admin',component: AdminComponent},
  {path: 'admin/student',component: StdlistComponent},
  {path:'admin/student/edit/:id',component: EditStdComponent},
  {path: 'students/:id',component: StudentHomeComponent},
  {path:'std/students/edit/:id',component: EditStdComponent},
  {path: 'speakers/:id',component: SpeakerHomeComponent},
  {path:'speakers',component: SpeakersListComponent},
  {path: 'admin/speakers/edit/:id',component:SpeakersEditComponent},
  {path: 'sp/speakers/edit/:id',component:SpeakersEditComponent },
  {path: 'sp/speakers/events/:id',component:SpeakerEventsComponent },
  {path: 'std/students/events/:id',component: StdEventsComponent},
  {path: '',redirectTo: 'home',pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
