import { Component } from "@angular/core";
import { confirm } from "ui/dialogs";

@Component({
    moduleId: __filename,
    templateUrl: "./confirm-dialog.component.html"
})
export class ConfirmDialogComponent {
    displayConfirmDialog() {
        // >> confirm-dialog-code
        let options = {
            title: "Race selection",
            message: "Are you sure you want to be a Unicorn?",
            okButtonText: "Yes",
            cancelButtonText: "No",
            neutralButtonText: "Cancel"
        };

        confirm(options).then((result: boolean) => {
            console.log(result);
        });
        // << confirm-dialog-code
    }
}
