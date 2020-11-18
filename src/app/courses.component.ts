import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses', // <courses>
    template: `
        <h2>{{ title }}</h2>
        <h2 [textContent] = "title"> </h2>
        <ul>
            <li *ngFor="let course of courses"> <!-- Example to display text for Property Binding -->
                {{course}}
            </li>
        </ul>
        <img src="{{ imageUrl }}" /> <!-- Example for String interpolation -->
        <br/>
        <img [src] = "imageUrl" /> <!-- Example for Property Binding -->
        `
})
export class CoursesComponent {
    constructor(service: CoursesService) {
        // let service = new CoursesService(); using a dependency injection into the constructor instead of this
        this.courses = service.getCourses();
    }
    title = "List of Courses";
    courses;
    imageUrl = "http://lorempixel.com/400/200"
}