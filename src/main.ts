import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { TradeChartComponent } from './app/trade-chart/trade-chart.component';

@Component({
  selector: 'app-root',
  imports:[TradeChartComponent],
  standalone: true,
  template: `
  <h3>dddd</h3>
 <app-trade-chart></app-trade-chart>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
