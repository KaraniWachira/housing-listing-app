import { Component } from '@angular/core';
import {HomeComponent} from "./home/home.component";
import {NgOptimizedImage} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" ngSrc="/assets/img/logo.png" alt="logo" aria-hidden="true"/>
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, NgOptimizedImage, RouterModule]
})
export class AppComponent {
  title = 'Homes';
}
