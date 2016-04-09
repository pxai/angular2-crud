System.register(["angular2/core", "./todo-detail.component", "./todo-edit.component", './todo.service'], function(exports_1, context_1) {
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
    var core_1, todo_detail_component_1, todo_edit_component_1, todo_service_1;
    var TodoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_detail_component_1_1) {
                todo_detail_component_1 = todo_detail_component_1_1;
            },
            function (todo_edit_component_1_1) {
                todo_edit_component_1 = todo_edit_component_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            }],
        execute: function() {
            /**
             * Changes in stage 2 - hero editor
            * Using a service to take care of the server interaction
            */
            TodoComponent = (function () {
                function TodoComponent(todoService) {
                    this._todoService = todoService;
                }
                TodoComponent.prototype.getTasks = function () {
                    var _this = this;
                    this._todoService.getTasks().then(function (tasks) { return _this.tasks = tasks; });
                };
                TodoComponent.prototype.ngOnInit = function () {
                    this.getTasks();
                };
                TodoComponent.prototype.edit = function (task) {
                    console.log("Task selected: " + task);
                    this.selectedTask = null;
                    this.editTask = task;
                };
                TodoComponent.prototype.detail = function (task) {
                    console.log("Task selected: " + task);
                    this.editTask = null;
                    this.selectedTask = task;
                };
                TodoComponent.prototype.update = function (task) {
                    console.log("Updating Task to server: " + task);
                };
                TodoComponent.prototype.delete = function (task) {
                    console.log("Task selected: " + task);
                    this.editTask = null;
                    this.selectedTask = task;
                };
                TodoComponent = __decorate([
                    core_1.Component({
                        selector: "todo",
                        template: "<h1>Todo tasks app</h1>\n\n                <todo-detail [task]=\"selectedTask\"></todo-detail>        \n                <todo-edit [task]=\"editTask\"></todo-edit>        \n                <h2>My Tasks</h2>\n                <ul class=\"tasks\">\n                <li *ngFor=\"#task of tasks\" [class.selected]=\"task === selectedTask\">\n                    <span (click)=\"edit(task)\"><strong>{{task.name}}</strong> {{task.done}}</span>\n                    <button (click)=\"detail(task)\">Detail</button>\n                    <button (click)=\"edit(task)\">Edit</button>\n                </li>\n                </ul>\n                ",
                        // Other directives, injected
                        directives: [todo_detail_component_1.TodoDetailComponent, todo_edit_component_1.TodoEditComponent],
                        // Used services, Injected 
                        providers: [todo_service_1.TodoService]
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], TodoComponent);
                return TodoComponent;
            }());
            exports_1("TodoComponent", TodoComponent);
        }
    }
});
//# sourceMappingURL=todo.component.js.map