import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses', // <courses>
    template: `
        <input (keyup.enter) = "onKeyUp($event)" /> 
        <!-- Traditional way of passing a value from front end using event object -->
        `
})
export class CoursesComponent {
    onKeyUp($event) {
        console.log($event.target.value); //Logging passed variable from front end
    }
        
}