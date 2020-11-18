import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses', // <courses>
    template: `
        <input (keyup.enter) = "onKeyUp()" /> <!-- Calling 'onKeyUp' method after "ENTER" key using Event Filtering -->
        `
})
export class CoursesComponent {
    onKeyUp() {
        console.log("ENTER was pressed");
    }
        
}