import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses', // <courses>
    template: `
        <button class="btn btn-primary" (click)="onSave()">Save</button> <!--Event based binding by calling a method-->
        `
})
export class CoursesComponent {
    onSave() { // Adding a method to be called at front end for event binding
        console.log("Button was clicked");
    }
}