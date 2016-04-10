import {Component, OnInit } from "angular2/core";
import { RouteParams } from 'angular2/router';
import { Router } from 'angular2/router';
import {Task} from "./task";
import { TodoService } from './todo.service';

/**
 * Changes in stage 4 - hero editor
* Using a service to take care of the server interaction
*/
@Component({
    selector: "todo-edit",
    template: `<div *ngIf="task">
                    <h2>Edit task</h2>
                    <div>Id: {{task.id}}</div>
                    <div><label>Task: </label></div>
                    <div><input [(ngModel)]="task.name" placeholder="Task name"></div>
                    <div><label for="done">Done: </label></div>
                    <div><input type="checkbox" [(ngModel)]="task.done" ></div>
                    <button (click)="update(task)">Save</button>
                </div>`
})
export class TodoEditComponent {
   //@Input()
   // We will no longer receive the task in a parent component property binding 
   public task : Task;
   private _todoService: TodoService;
   private _routeParams: RouteParams;
   private _router : Router;
    
    constructor(todoService: TodoService,
                router: Router,
                routeParams: RouteParams) { 
        this._todoService = todoService;
        this._router = router;
        this._routeParams = routeParams;
    }
    
    public ngOnInit () {
        let id = +this._routeParams.get('id');
        this._todoService.getTask(id)
            .then(task => this.task = task);
    }
    
    public update (task: Task) {
        console.log("Updating " + task);
       
        this._todoService.updateTask(task)
            .then(task => this.goBack());
    }
    
    private goBack () {
        let link = ['TodoDashboardComponent', {}];
        this._router.navigate(link)
    }
    
}
