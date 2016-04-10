System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var TodoService, TASKS;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * Changes in stage 2 - hero editor
            * Using a service to take care of the server interaction
            */
            TodoService = (function () {
                function TodoService() {
                    this.tasks = TASKS;
                }
                /**
                 * returns all tasks
                 * Check about promises: http://exploringjs.com/es6/ch_promises.html
                 */
                TodoService.prototype.getTasks = function () {
                    return Promise.resolve(this.tasks);
                };
                TodoService.prototype.getTask = function (id) {
                    return Promise.resolve(this.tasks).then(function (tasks) { return tasks.filter(function (task) { return task.id === id; })[0]; });
                };
                /**
                 * The same with some latency added
                 */
                TodoService.prototype.getTasksLatency = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(_this.tasks); }, 1000);
                    } // 1 second
                     // 1 second
                    );
                };
                /**
               * The same with some latency added
               */
                TodoService.prototype.updateTask = function (updatedTask) {
                    return Promise.resolve(this.tasks).then(function (tasks) { return tasks.filter(function (task) { return task.id === updatedTask.id; })[0] = updatedTask; });
                };
                /**
                * The same with some latency added
                */
                TodoService.prototype.saveTask = function (task) {
                    return Promise.resolve(this.tasks).then(function (tasks) { return tasks.push(task); });
                };
                TodoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TodoService);
                return TodoService;
            }());
            exports_1("TodoService", TodoService);
            TASKS = [
                { id: 1, name: 'Finish this sample', done: false },
                { id: 2, name: 'Prepare meal', done: false },
                { id: 3, name: 'Play with friends', done: false },
                { id: 4, name: 'Run to the hills', done: false },
                { id: 5, name: 'Lear Ionic2', done: false }
            ];
        }
    }
});
//# sourceMappingURL=todo.service.js.map