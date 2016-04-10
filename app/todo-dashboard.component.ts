import {Component} from "angular2/core";
import { RouteParams } from 'angular2/router';
import { Router } from 'angular2/router';
import {OnInit} from 'angular2/core'; // Part of the lifecycle hook
import {Task} from "./task";
import {TodoDetailComponent} from "./todo-detail.component";
import {TodoEditComponent} from "./todo-edit.component";
import {TodoService} from './todo.service';

/**
 * Changes in stage 2 - hero editor
* Using a service to take care of the server interaction
*/
@Component({
    selector: "todo",
    template: `<h1>Todo tasks app Dashboard</h1>
                <h2>My Tasks</h2>
                <ul class="tasks">
                <li *ngFor="#task of tasks" [class.selected]="task === selectedTask">
                    <span (click)="edit(task)"><strong>{{task.name}}</strong> {{task.done}}</span>
                    <button (click)="detail(task)">Detail</button>
                    <button (click)="edit(task)">Edit</button>
                </li>
                </ul>
                `,
     // Other directives, injected
     directives: [TodoDetailComponent, TodoEditComponent],
     // Used services, Injected 
     providers: [TodoService]
})
export class TodoDashboardComponent  implements OnInit {
    public tasks : Task[];
    public editTask : Task;
    public selectedTask : Task;
    private _todoService : TodoService;
    private _routeParams: RouteParams;
    private _router : Router;
    
    constructor(todoService: TodoService,
                router: Router,
                routeParams: RouteParams) { 
        this._todoService = todoService;
        this._router = router;
        this._routeParams = routeParams;
    }
    
    private getTasks () {
        this._todoService.getTasks().then(tasks => this.tasks = tasks.slice(0,3));
    }
    
    public ngOnInit() {
        this.getTasks();
    }
    
    public edit (task: Task) {
        console.log("Task selected: " + task);
      // Directly
      //  this.selectedTask = null;
      //  this.editTask = task;
        console.log("Task selected: " + task);
        let link = ['TodoEditComponent', { id: task.id }];
        this._router.navigate(link);
    }
    
    public detail (task: Task) {
        console.log("Task selected: " + task);
        let link = ['TodoDetailComponent', { id: task.id }];
        this._router.navigate(link);
    }
    
    public update (task: Task) {
        console.log("Updating Task to server: " + task);
    }
    
    public delete (task: Task) {
        console.log("Task selected: " + task);
        this.editTask = null;
        this.selectedTask = task;
    }

}

