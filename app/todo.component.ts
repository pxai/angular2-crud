import {Component} from "angular2/core";
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
    template: `<h1>Todo tasks app</h1>

                <todo-detail [task]="selectedTask"></todo-detail>        
                <todo-edit [task]="editTask"></todo-edit>        
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
export class TodoComponent  implements OnInit {
    public tasks : Task[];
    public editTask : Task;
    public selectedTask : Task;
    private _todoService : TodoService;
    
    constructor(todoService: TodoService) { 
        this._todoService = todoService;
    }
    
    private getTasks () {
        this._todoService.getTasks().then(tasks => this.tasks = tasks);
    }
    
    public ngOnInit() {
        this.getTasks();
    }
    
    public edit (task: Task) {
        console.log("Task selected: " + task);
        this.selectedTask = null;
        this.editTask = task;
    }
    
    public detail (task: Task) {
        console.log("Task selected: " + task);
        this.editTask = null;
        this.selectedTask = task;
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

