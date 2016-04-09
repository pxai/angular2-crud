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
    var TodoEditComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
             * Changes in stage 4 - hero editor
            * Using a service to take care of the server interaction
            */
            TodoEditComponent = (function () {
                function TodoEditComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TodoEditComponent.prototype, "task", void 0);
                TodoEditComponent = __decorate([
                    core_1.Component({
                        selector: "todo-edit",
                        template: "<div *ngIf=\"task\">\n                    <h2>Edit</h2>\n                    <div>Id: {{task.id}}</div>\n                    <div><label>Task: </label></div>\n                    <div><input [(ngModel)]=\"task.name\" placeholder=\"Task name\"></div>\n                    <div><label for=\"done\">Done: </label></div>\n                    <div><input type=\"checkbox\" [(ngModel)]=\"task.done\" ></div>\n                    <button (onclick)=\"update(task)\">Save</button>\n                </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoEditComponent);
                return TodoEditComponent;
            }());
            exports_1("TodoEditComponent", TodoEditComponent);
        }
    }
});
//# sourceMappingURL=todo-edit.component.js.map