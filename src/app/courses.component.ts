import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses', // <courses>
    template: `
            <input #email (keyup.enter)="onKeyUp(email.value)" /> 
            <!-- Passing variable from front end after hitting "ENTER" using Angular -->
        `
})
export class CoursesComponent {
    onKeyUp(email) { // Using the passed variable from front end
        console.log(email);        
    }
        
}