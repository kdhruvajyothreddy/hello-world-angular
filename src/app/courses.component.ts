import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses', // <courses>
    template: `
           Course Title: {{ course.title | uppercase | lowercase }} <br/> <!-- Pipe to change text to uppercase or lowercase -->
           Course Students: {{ course.students | number }} <br/> <!-- Pipe to change the count to a readable number format -->
           Course Rating: {{ course.rating | number:'1.2-2' }} <br/> <!-- Pipe to change to decimal with argument for decimal points -->
           Course Price: {{ course.price | currency:'INR'}} <br/> <!-- Pipe to change number to currency with argument type of currency -->
           Course Release Date: {{ course.releaseDate | date:'shortDate' }} <!-- Pipe to change to a readable date with a date format argument -->
        `
})
export class CoursesComponent {
    course = {
        title: "The Complete Angular Course",
        students: 30123,
        rating: 4.9745,        
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }
        
}