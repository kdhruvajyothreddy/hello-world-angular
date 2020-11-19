import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms"; //Import FormsModule for ngModel to work for Two way binding
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';
import { CoursesService } from './courses.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Declaring FormsModule under imports array for ngModel for Two way binding
  ],
  providers: [
    CoursesService // registering the class as a dependency provider for dependency injection, also know as Singleton instance
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
