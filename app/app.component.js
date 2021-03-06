System.register(['angular2/core', 'angular2/router', './httpsample.component', './todo.component', './todo-dashboard.component', './todo-edit.component', './todo-detail.component', './todo.service'], function(exports_1, context_1) {
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
    var core_1, router_1, httpsample_component_1, todo_component_1, todo_dashboard_component_1, todo_edit_component_1, todo_detail_component_1, todo_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (httpsample_component_1_1) {
                httpsample_component_1 = httpsample_component_1_1;
            },
            function (todo_component_1_1) {
                todo_component_1 = todo_component_1_1;
            },
            function (todo_dashboard_component_1_1) {
                todo_dashboard_component_1 = todo_dashboard_component_1_1;
            },
            function (todo_edit_component_1_1) {
                todo_edit_component_1 = todo_edit_component_1_1;
            },
            function (todo_detail_component_1_1) {
                todo_detail_component_1 = todo_detail_component_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            }],
        execute: function() {
            /**
             * Form samples
             */
            // Different kinds of interpolation
            // Notice textContent is a dom element
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Server samples';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'server-app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            todo_service_1.TodoService
                        ],
                        template: "<h1>{{title}}</h1>\n                <nav>\n                <ul>\n                     <li><a href=\"/\">Home of Todo app</a></li>\n                     <li><a [routerLink]=\"['HttpSample']\">Http Sample</a></li>\n                     <li><a [routerLink]=\"['TodoDashboardComponent']\">Todo dashboard</a></li>\n                     <li><a [routerLink]=\"['TodoComponent']\">Todo list</a></li>\n                </ul>\n                </nav>\n                <router-outlet></router-outlet>"
                    }),
                    router_1.RouteConfig([
                        { path: '/httpsample', name: 'HttpSample', component: httpsample_component_1.HttpSampleComponent },
                        { path: '/tododashboard', name: 'TodoDashboardComponent', component: todo_dashboard_component_1.TodoDashboardComponent, useAsDefault: true },
                        { path: '/todocomponent', name: 'TodoComponent', component: todo_component_1.TodoComponent },
                        { path: '/todoedit/:id', name: 'TodoEditComponent', component: todo_edit_component_1.TodoEditComponent },
                        { path: '/tododetail/:id', name: 'TodoDetailComponent', component: todo_detail_component_1.TodoDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map