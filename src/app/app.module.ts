import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS}from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { LoginInterceptor } from './login.interceptor';
import { StudentComponent } from './student/student.component';
import { EventsModule } from './events/events.module';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    FormsModule,
    EventsModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:LoginInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
