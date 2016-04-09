import {Component, Input} from "angular2/core";
import {Task} from "./task";

/**
 * Changes in stage 3 - hero editor
* Using a service to take care of the server interaction
*/
@Component({
    selector: "todo-detail",
    template: `<div *ngIf="task">
                    <h2>{{task.name}}</h2>
                    <div>Id: {{task.id}}</div>
                    <div>Done: {{task.done}}</div>
                    <button (click)="edit(task)">Edit</button>
                    <button (click)="delete(task)">Delete</button>
               </div>`
})
export class TodoDetailComponent {
    @Input() 
    public task : Task;
    
}
