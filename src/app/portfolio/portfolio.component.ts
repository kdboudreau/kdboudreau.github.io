import { Component, OnInit, NgModule } from '@angular/core';
import { trigger, transition, animate, style, state } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    NoopAnimationsModule
  ]
})

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css',
              '../app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('out', style({display: 'none'})),
      state('in', style({display: 'block'})),
      transition('out => in', [
        style({transform: 'translateY(-100%)'}),
        animate('2000ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition('in => out', [
        animate('2000ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
  // animations: [SlideInOutAnimation]
})

export class PortfolioComponent implements OnInit {

  delayPortfolioH2 = false;
  delayPortfolioDiv = false;
  // delayPortfolioH2 = 'out';
  // delayPortfolioDiv = 'out';

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.delayPortfolioH2 = true, 1500);
    setTimeout(() => this.delayPortfolioDiv = true, 2000);
    // setTimeout(() => this.delayPortfolioH2 = 'in', 1500);
    // setTimeout(() => this.delayPortfolioDiv = 'in', 2000);
  }


}
