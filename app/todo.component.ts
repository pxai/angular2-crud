import {Component} from "angular2/core";
import {Task} from "./task";

/**
 * Changes in stage 2 - hero editor
* Using a service to take care of the server interaction
*/
@Component({
    selector: "todo",
    template: `<h1>Todo tasks app</h1>
                <div *ngIf="editTask">
                    <h2>Edit</h2>
                    <div>Id: {{editTask.id}}</div>
                    <div><label>Task: </label></div>
                    <div><input [(ngModel)]="editTask.name" placeholder="Task name"></div>
                    <div><label for="done">Done: </label></div>
                    <div><input type="checkbox" [(ngModel)]="editTask.done" ></div>
                    <button (onclick)="update(editTask)">Save</button>
                </div>
                <div *ngIf="selectedTask">
                    <h2>{{selectedTask.name}}</h2>
                    <div>Id: {{selectedTask.id}}</div>
                    <div>Done: {{selectedTask.done}}</div>
                    <button (click)="edit(selectedTask)">Edit</button>
                    <button (click)="delete(selectedTask)">Delete</button>
                    </div>              
                <h2>My Tasks</h2>
                <ul class="tasks">
                <li *ngFor="#task of tasks" [class.selected]="task === selectedTask">
                    <span (click)="edit(task)"><strong>{{task.name}}</strong> {{task.done}}</span>
                    <button (click)="detail(task)">Detail</button>
                    <button (click)="edit(task)">Edit</button>
                </li>
                </ul>
                `
})
export class TodoComponent {
    public tasks = TASKS;
    public editTask : Task;
    public selectedTask : Task;
    
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

var TASKS: Task[] = [
      {id: 1, name: 'Finish this sample', done: false},
      {id: 2, name: 'Prepare meal', done: false},
      {id: 3, name: 'Play with Josu', done: false},
];
