import { Component, OnInit, NgModule, AfterViewInit } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css',
              '../app.component.css'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({opacity: 0.4, transform: 'translateX(100%)'}),
        animate(800, style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        style({opacity: 1, transform: 'translateX(0%)'}),
        animate('800ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})

export class PortfolioComponent implements AfterViewInit  {

  delayPortfolioH2 = false;
  delayPortfolioDiv = false;

  constructor() { }

  ngAfterViewInit() {
    setTimeout(() => this.delayPortfolioH2 = true, 1500);
    setTimeout(() => this.delayPortfolioDiv = true, 2300);
  }

}
