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
    var TodoDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * Changes in stage 3 - hero editor
            * Using a service to take care of the server interaction
            */
            TodoDetailComponent = (function () {
                function TodoDetailComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TodoDetailComponent.prototype, "task", void 0);
                TodoDetailComponent = __decorate([
                    core_1.Component({
                        selector: "todo-detail",
                        template: "<div *ngIf=\"task\">\n                    <h2>{{task.name}}</h2>\n                    <div>Id: {{task.id}}</div>\n                    <div>Done: {{task.done}}</div>\n                    <button (click)=\"edit(task)\">Edit</button>\n                    <button (click)=\"delete(task)\">Delete</button>\n               </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoDetailComponent);
                return TodoDetailComponent;
            }());
            exports_1("TodoDetailComponent", TodoDetailComponent);
        }
    }
});
//# sourceMappingURL=todo-detail.component.js.map