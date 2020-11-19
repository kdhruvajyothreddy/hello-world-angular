import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses', // <courses>
    template: `
            <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" /> 
            <!-- Implementing Two way data binding using ngModel property-->
        `
})
export class CoursesComponent {
    email;
    onKeyUp() { 
        console.log(this.email);        
    }
        
}