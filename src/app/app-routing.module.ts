import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './events/list/list.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';
import { AddEventComponent } from './events/add-event/add-event.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { DetailsEventComponent } from './events/details-event/details-event.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path: 'event',component: ListComponent},
  {path: 'event/add',component:  CreateEventComponent},
  {path: 'event/edit/:id',component: EditEventComponent},
  {path: 'home',component: HomeComponent},
  {path:'event/details/:id',component: DetailsEventComponent},
  {path: 'admin',component: AdminComponent},
  //{path: 'event/:numberOfSpeakers/:numberOfStudents',component: CreateEventComponent},
  {path: '',redirectTo: 'home',pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
