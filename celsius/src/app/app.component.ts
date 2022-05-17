import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Bienvenue sur {{title}}!
      </h1>
      <span style="display: block">{{ title }} app is running!</span>
      <img width="300" alt="Angular Logo" src="https://github.com/bebisoa/node-cobwzn/blob/f273cc8c0bcab1fd6b406223b616199d3bcbdaa4/celsius/src/assets/02%20Celsius.jpg">
    </div>
    <h2>Here are some links to help you start: </h2>
    <ul>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/cli">CLI Documentation</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class AppComponent {
  title = 'celsius';
}
