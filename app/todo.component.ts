import {Component} from "angular2/core";
import {Task} from "./task";

/**
* Using a service to take care of the server interaction
*/
@Component({
    selector: "todo",
    template: `<h1>Todo task {{task.id}}</h1><p>{{task.string}}</p>Is it done? {{task.done}}`
})
export class TodoComponent {
    task : Task = {
      id : 1,
      name : 'Finish this sample',
      done : false
    };
}
