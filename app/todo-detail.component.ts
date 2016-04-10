import {Component,  OnInit } from "angular2/core";
import { RouteParams } from 'angular2/router';
import {Task} from "./task";
import { TodoService } from './todo.service';

/**
 * Changes in stage 3 - hero editor
* Using a service to take care of the server interaction
*/
@Component({
    selector: "todo-detail",
    template: `<div *ngIf="task">
                    <h2>{{task.name  | uppercase }}</h2>
                    <div>Id: {{task.id}}</div>
                    <div>Done: {{task.done}}</div>
                    <button (click)="edit(task)">Edit</button>
                    <button (click)="delete(task)">Delete</button>
               </div>
               <a href="" (click)="goBack(e)">Back</a>`,
    providers: [TodoService]
})
export class TodoDetailComponent implements OnInit {
    //@Input()
    // We will no longer receive the task in a parent component property binding 
    public task : Task;
    private _todoService: TodoService;
    private _routeParams: RouteParams;
    
    public constructor (  todoService: TodoService,
                          routeParams: RouteParams) {
        this._todoService = todoService;
        this._routeParams = routeParams;
        
    }
    
    public ngOnInit () {
        let id = +this._routeParams.get('id');
        this._todoService.getTask(id)
            .then(task => this.task = task);
    }
    
    public goBack(e) {
        window.history.back();
    }
}
