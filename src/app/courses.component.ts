import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses', // <courses>
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let course of courses"> <!-- Example to display text for Property Binding -->
                {{course}}
            </li>
        </ul>
        <table>
            <tr>
                <td [attr.colSpan] = "colSpan">Hello</td> <!-- Using html attribute with attr. -->
            </tr>
        </table>
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