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
    // trigger('slideInOut', [
    //   state('out', style({opacity: 0})),
    //   state('in', style({opacity: 1})),
    //   transition('out => in', [
    //     style({opacity: 0, transform: 'translateX(-100%)'}),
    //     animate('2000ms ease-in', style({transform: 'translateX(0%)'}))
    //   ]),
    //   transition('in => out', [
    //   style({opacity: 1, transform: 'translateX(0%)'}),
    //     animate('2000ms ease-in', style({transform: 'translateX(-100%)'}))
    //   ])
    // ])
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateX(-100px)'}),
        animate('10000ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0%)'}),
        animate('2000ms ease-in', style({transform: 'translateX(-100%)'}))
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
