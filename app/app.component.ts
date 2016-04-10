import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router'
import {HttpSampleComponent} from './httpsample.component';
import {TodoComponent} from './todo.component';
import {TodoDashboardComponent} from './todo-dashboard.component';
import {TodoEditComponent} from './todo-edit.component';
import {TodoDetailComponent} from './todo-detail.component';
import {TodoService} from './todo.service';

/**
 * Form samples
 */
// Different kinds of interpolation
// Notice textContent is a dom element
@Component({
    selector: 'server-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [
            ROUTER_PROVIDERS,
            TodoService
    ],
    template: `<h1>{{title}}</h1>
                <nav>
                <ul>
                     <li><a href="/">Home of Todo app</a></li>
                     <li><a [routerLink]="['HttpSample']">Http Sample</a></li>
                     <li><a [routerLink]="['TodoDashboardComponent']">Todo dashboard</a></li>
                     <li><a [routerLink]="['TodoComponent']">Todo list</a></li>
                </ul>
                </nav>
                <router-outlet></router-outlet>`
})
@RouteConfig([
  {path: '/httpsample', name: 'HttpSample', component: HttpSampleComponent},
  {path: '/tododashboard', name: 'TodoDashboardComponent', component: TodoDashboardComponent, useAsDefault : true},
  {path: '/todocomponent', name: 'TodoComponent', component: TodoComponent },
  {path: '/todoedit/:id', name: 'TodoEditComponent', component: TodoEditComponent },
  {path: '/tododetail/:id', name: 'TodoDetailComponent', component: TodoDetailComponent }
  ])
export class AppComponent {
    private title: string = 'Server samples';
}
