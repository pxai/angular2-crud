import {Component, Input} from "angular2/core";
import {Task} from "./task";

/**
 * Changes in stage 4 - hero editor
* Using a service to take care of the server interaction
*/
@Component({
    selector: "todo-edit",
    template: `<div *ngIf="task">
                    <h2>Edit</h2>
                    <div>Id: {{task.id}}</div>
                    <div><label>Task: </label></div>
                    <div><input [(ngModel)]="task.name" placeholder="Task name"></div>
                    <div><label for="done">Done: </label></div>
                    <div><input type="checkbox" [(ngModel)]="task.done" ></div>
                    <button (onclick)="update(task)">Save</button>
                </div>`
})
export class TodoEditComponent {
    @Input() 
    public task : Task;
    
}
