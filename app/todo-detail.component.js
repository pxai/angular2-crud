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
    var core_1, router_1, todo_service_1;
    var TodoDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            }],
        execute: function() {
            /**
             * Changes in stage 3 - hero editor
            * Using a service to take care of the server interaction
            */
            TodoDetailComponent = (function () {
                function TodoDetailComponent(todoService, routeParams) {
                    this._todoService = todoService;
                    this._routeParams = routeParams;
                }
                TodoDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    this._todoService.getTask(id)
                        .then(function (task) { return _this.task = task; });
                };
                TodoDetailComponent.prototype.goBack = function (e) {
                    window.history.back();
                };
                TodoDetailComponent = __decorate([
                    core_1.Component({
                        selector: "todo-detail",
                        template: "<div *ngIf=\"task\">\n                    <h2>{{task.name  | uppercase }}</h2>\n                    <div>Id: {{task.id}}</div>\n                    <div>Done: {{task.done}}</div>\n                    <button (click)=\"edit(task)\">Edit</button>\n                    <button (click)=\"delete(task)\">Delete</button>\n               </div>\n               <a href=\"\" (click)=\"goBack(e)\">Back</a>",
                        providers: [todo_service_1.TodoService]
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService, router_1.RouteParams])
                ], TodoDetailComponent);
                return TodoDetailComponent;
            }());
            exports_1("TodoDetailComponent", TodoDetailComponent);
        }
    }
});
//# sourceMappingURL=todo-detail.component.js.map