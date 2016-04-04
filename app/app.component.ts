import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {HttpSampleComponent} from './httpsample.component';

/**
 * Form samples
 */
// Different kinds of interpolation
// Notice textContent is a dom element
@Component({
    selector: 'server-app',
    directives: [ROUTER_DIRECTIVES],
    template: `<h1>{{title}}</h1>
                <nav>
                <ul>
                     <li><a [routerLink]="['HttpSample']">Http Sample</a></li>
                </ul>
                </nav>
                <router-outlet></router-outlet>`
})
@RouteConfig([
  {path: '/httpsample', name: 'HttpSample', component: HttpSampleComponent}
  ])
export class AppComponent {
    private title: string = 'Server samples';
}
