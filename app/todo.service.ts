import {Injectable} from "angular2/core";
import {Task} from "./task";


/**
 * Changes in stage 2 - hero editor
* Using a service to take care of the server interaction
*/

@Injectable()
export class TodoService {
  private tasks : Task[] = TASKS;
  
  /**
   * returns all tasks
   * Check about promises: http://exploringjs.com/es6/ch_promises.html
   */
  public getTasks() {
      return Promise.resolve(this.tasks);
  }
  
  public getTask(id: number) {
    return Promise.resolve(this.tasks).then(
        tasks => tasks.filter(task => task.id === id)[0]
    );
  }
  
  /**
   * The same with some latency added
   */
  getTasksLatency() {
    return new Promise<Task[]>(resolve =>
      setTimeout(()=>resolve(this.tasks), 1000) // 1 second
    );
  }
  
    /**
   * The same with some latency added
   */
  updateTask (updatedTask: Task) {
    return Promise.resolve(this.tasks).then(
        tasks => tasks.filter(task => task.id === updatedTask.id)[0] = updatedTask
    );
  }
  
   /**
   * The same with some latency added
   */
  saveTask (task: Task) {
    return Promise.resolve(this.tasks).then(
        tasks => tasks.push(task)
    );
  }
}

var TASKS: Task[] = [
      {id: 1, name: 'Finish this sample', done: false},
      {id: 2, name: 'Prepare meal', done: false},
      {id: 3, name: 'Play with friends', done: false},
      {id: 4, name: 'Run to the hills', done: false},
      {id: 5, name: 'Lear Ionic2', done: false}
];

