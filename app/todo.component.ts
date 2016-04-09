import {Component} from "angular2/core";
import {Task} from "./task";

/**
* Using a service to take care of the server interaction
*/
@Component({
    selector: "todo",
    template: `<h1>Todo task {{task.id}}</h1>
                <p>{{task.name}}</p>
                Is it done? {{task.done}}
                <div>
                <h2>Edit</h2>
                <div><label>Task: </label></div>
                <div><input [(ngModel)]="task.name" placeholder="Task name"></div>
                <div><label for="done">Done: </label></div>
                <div><input type="checkbox" id="done" [(ngModel)]="task.done" ></div>
                </div>
                `
})
export class TodoComponent {
    task : Task = {
      id : 1,
      name : 'Finish this sample',
      done : false
    };
}
