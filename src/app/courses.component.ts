import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses', // <courses>
    template: `
        <button class="btn btn-primary" (click)="onSave($event)">Save</button> 
        <!-- Event based binding and gathering additional information -->
        `
})
export class CoursesComponent {
    onSave($event) { // Event based binding and passing additional information about the event
        console.log("Button was clicked", $event);
    }
}