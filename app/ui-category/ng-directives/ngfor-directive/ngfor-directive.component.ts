import { Component } from "@angular/core";
import { fruits } from "./fruits";

// >> ngfor-bind-items-code
@Component({
    moduleId: __filename,
    templateUrl: "./ngfor-directive.component.html",
})
export class NgForComponent {
    public fruitList: Array<string> = [];

    constructor() {
        this.fruitList = fruits;
    }
}
// << ngfor-bind-items-code
