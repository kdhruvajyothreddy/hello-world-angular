import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses', // <courses>
    template: `
        <div (click)="onDivClicked($event)" > <!-- Event bubbling in event binding -->
            <button class="btn btn-primary" (click)="onSave($event)">Save</button> 
            <!-- Event based binding and gathering additional information -->
        </div>
        `
})
export class CoursesComponent {
    onSave($event) { // Event based binding and passing additional information about the event
        console.log("Button was clicked", $event);
    }
    onDivClicked($event) { // Passing event to display event bubbling in event binding
        console.log("Button was clicked in Div", $event);
        
    }
}