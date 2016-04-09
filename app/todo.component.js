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
    var TodoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            /**
            * Using a service to take care of the server interaction
            */
            TodoComponent = (function () {
                function TodoComponent() {
                    this.task = {
                        id: 1,
                        name: 'Finish this sample',
                        done: false
                    };
                }
                TodoComponent = __decorate([
                    core_1.Component({
                        selector: "todo",
                        template: "<h1>Todo task {{task.id}}</h1>\n                <p>{{task.name}}</p>\n                Is it done? {{task.done}}\n                <div>\n                <h2>Edit</h2>\n                <div><label>Task: </label></div>\n                <div><input [(ngModel)]=\"task.name\" placeholder=\"Task name\"></div>\n                <div><label for=\"done\">Done: </label></div>\n                <div><input type=\"checkbox\" id=\"done\" [(ngModel)]=\"task.done\" ></div>\n                </div>\n                "
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoComponent);
                return TodoComponent;
            }());
            exports_1("TodoComponent", TodoComponent);
        }
    }
});
//# sourceMappingURL=todo.component.js.map