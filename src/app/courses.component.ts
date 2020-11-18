import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses', // <courses>
    template: `
        <button class="btn btn-primary" [class.active]="isActive">Save</button> <!-- Adding a new class "active" and binding it -->
        `
})
export class CoursesComponent {
    isActive = true; // variable used for class binding
    
}