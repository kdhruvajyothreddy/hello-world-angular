import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'summary' // Name of the custom pipe to be called on the component
})
export class SummaryPipe implements PipeTransform {
    transform(value: string, limit?: number) { // 'transform' method used and passed values based on API
        if (!value) {
            return null;
        }
        let actualLimit = (limit) ? limit : 50; // assigning 'limit' based on condition, if limit exists assign or by default assign 50
        return value.substr(0, actualLimit) + " .....";
    }
}