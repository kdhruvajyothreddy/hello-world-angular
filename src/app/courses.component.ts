import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses', // <courses>
    template: `
        <button class="btn btn-primary">Save</button>
        `
})
export class CoursesComponent {
    constructor(service: CoursesService) {
        // let service = new CoursesService(); using a dependency injection into the constructor instead of this
        this.courses = service.getCourses();
    }
    title = "List of Courses";
    courses;
    colSpan = 2; // Creating attribute for binding
    
}