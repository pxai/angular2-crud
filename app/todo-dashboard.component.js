System.register(["angular2/core", 'angular2/router', "./todo-detail.component", "./todo-edit.component", './todo.service'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, todo_detail_component_1, todo_edit_component_1, todo_service_1;
    var TodoDashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
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
            TodoDashboardComponent = (function () {
                function TodoDashboardComponent(todoService, router, routeParams) {
                    this._todoService = todoService;
                    this._router = router;
                    this._routeParams = routeParams;
                }
                TodoDashboardComponent.prototype.getTasks = function () {
                    var _this = this;
                    this._todoService.getTasks().then(function (tasks) { return _this.tasks = tasks.slice(0, 3); });
                };
                TodoDashboardComponent.prototype.ngOnInit = function () {
                    this.getTasks();
                };
                TodoDashboardComponent.prototype.edit = function (task) {
                    console.log("Task selected: " + task);
                    // Directly
                    //  this.selectedTask = null;
                    //  this.editTask = task;
                    console.log("Task selected: " + task);
                    var link = ['TodoEditComponent', { id: task.id }];
                    this._router.navigate(link);
                };
                TodoDashboardComponent.prototype.detail = function (task) {
                    console.log("Task selected: " + task);
                    var link = ['TodoDetailComponent', { id: task.id }];
                    this._router.navigate(link);
                };
                TodoDashboardComponent.prototype.update = function (task) {
                    console.log("Updating Task to server: " + task);
                };
                TodoDashboardComponent.prototype.delete = function (task) {
                    console.log("Task selected: " + task);
                    this.editTask = null;
                    this.selectedTask = task;
                };
                TodoDashboardComponent = __decorate([
                    core_1.Component({
                        selector: "todo",
                        template: "<h1>Todo tasks app Dashboard</h1>\n                <h2>My Tasks</h2>\n                <ul class=\"tasks\">\n                <li *ngFor=\"#task of tasks\" [class.selected]=\"task === selectedTask\">\n                    <span (click)=\"edit(task)\"><strong>{{task.name}}</strong> {{task.done}}</span>\n                    <button (click)=\"detail(task)\">Detail</button>\n                    <button (click)=\"edit(task)\">Edit</button>\n                </li>\n                </ul>\n                ",
                        // Other directives, injected
                        directives: [todo_detail_component_1.TodoDetailComponent, todo_edit_component_1.TodoEditComponent],
                        // Used services, Injected 
                        providers: [todo_service_1.TodoService]
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService, router_2.Router, router_1.RouteParams])
                ], TodoDashboardComponent);
                return TodoDashboardComponent;
            }());
            exports_1("TodoDashboardComponent", TodoDashboardComponent);
        }
    }
});
//# sourceMappingURL=todo-dashboard.component.js.map