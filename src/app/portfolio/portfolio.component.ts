import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css',
              '../app.component.css']
})
export class PortfolioComponent implements OnInit {

  delayPortfolioH2: boolean;
  delayPortfolioDiv: boolean;

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.delayPortfolioH2 = true, 1500);
    setTimeout(() => this.delayPortfolioDiv = true, 2000);
  }

}
