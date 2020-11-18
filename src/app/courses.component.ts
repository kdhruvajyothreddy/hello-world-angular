import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses', // <courses>
    template: `
        <button class="btn btn-primary" [style.backgroundColor]="isActive ? 'blue' : 'red'">Save</button> 
        <!-- Adding a new style object "backgroundColor" and binding it to conditionally display backround color -->
        `
})
export class CoursesComponent {
    isActive = true; // variable used for style binding
    
}