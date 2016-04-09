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
  getTasks() {
      return Promise.resolve(this.tasks);
  }
  
  /**
   * The same with some latency added
   */
  getTasksLatency() {
    return new Promise<Task[]>(resolve =>
      setTimeout(()=>resolve(this.tasks), 1000) // 1 second
    );
  }
}

var TASKS: Task[] = [
      {id: 1, name: 'Finish this sample', done: false},
      {id: 2, name: 'Prepare meal', done: false},
      {id: 3, name: 'Play with Josu', done: false},
];

