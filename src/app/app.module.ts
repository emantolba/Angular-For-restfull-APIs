import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS}from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginInterceptor } from './login.interceptor';
import { EventsModule } from './events/events.module';
import { AdminComponent } from './admin/admin.component';
import { StudentsModule } from './students/students.module';
import { SpeakersModule } from './speakers/speakers.module';
import { StudentHomeComponent } from './student-home/student-home.component';
import { SpeakerHomeComponent } from './speaker-home/speaker-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    StudentHomeComponent,
    SpeakerHomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    FormsModule,
    EventsModule,
    StudentsModule,
    SpeakersModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:LoginInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
