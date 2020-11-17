import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses', // <courses>
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
        `
})
export class CoursesComponent {
    constructor(service: CoursesService) {
        // let service = new CoursesService(); using a dependency injection into the constructor instead of this
        this.courses = service.getCourses();
    }
    title = "List of Courses";
    courses;
}