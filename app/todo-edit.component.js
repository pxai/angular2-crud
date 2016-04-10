System.register(["angular2/core", 'angular2/router', './todo.service'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, todo_service_1;
    var TodoEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            }],
        execute: function() {
            /**
             * Changes in stage 4 - hero editor
            * Using a service to take care of the server interaction
            */
            TodoEditComponent = (function () {
                function TodoEditComponent(todoService, router, routeParams) {
                    this._todoService = todoService;
                    this._router = router;
                    this._routeParams = routeParams;
                }
                TodoEditComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._todoService.getTask(id)
                        .then(function (task) { return _this.task = task; });
                };
                TodoEditComponent.prototype.update = function (task) {
                    var _this = this;
                    console.log("Updating " + task);
                    this._todoService.updateTask(task)
                        .then(function (task) { return _this.goBack(); });
                };
                TodoEditComponent.prototype.goBack = function () {
                    var link = ['TodoDashboardComponent', {}];
                    this._router.navigate(link);
                };
                TodoEditComponent = __decorate([
                    core_1.Component({
                        selector: "todo-edit",
                        template: "<div *ngIf=\"task\">\n                    <h2>Edit task</h2>\n                    <div>Id: {{task.id}}</div>\n                    <div><label>Task: </label></div>\n                    <div><input [(ngModel)]=\"task.name\" placeholder=\"Task name\"></div>\n                    <div><label for=\"done\">Done: </label></div>\n                    <div><input type=\"checkbox\" [(ngModel)]=\"task.done\" ></div>\n                    <button (click)=\"update(task)\">Save</button>\n                </div>"
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService, router_2.Router, router_1.RouteParams])
                ], TodoEditComponent);
                return TodoEditComponent;
            }());
            exports_1("TodoEditComponent", TodoEditComponent);
        }
    }
});
//# sourceMappingURL=todo-edit.component.js.map