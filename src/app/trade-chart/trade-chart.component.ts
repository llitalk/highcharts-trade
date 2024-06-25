import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import Highcharts from 'highcharts';
import { companyData } from './data';
import { HttpClient } from '@angular/common/http';
import { data } from './datax';
console.clear();

@Component({
  selector: 'app-trade-chart',
  standalone: true,
  imports: [HighchartsChartModule, ChartModule, CommonModule],
  template: `
  <h3>HighChart Trade</h3>
  <div class="chart-container">
    <h2>Daily Last Ratess</h2>
    <highcharts-chart
    [Highcharts]="Highcharts"
    [options]="x"
    ></highcharts-chart>
  </div>
  `,
  styleUrl: './trade-chart.component.css'
})
export class TradeChartComponent implements OnInit {
  public Highcharts: typeof Highcharts = Highcharts;

  x = {
    title: {
      text: companyData.CompanyDetails.Name,
      align: 'center'
    },
    series: [{
      type: 'area',
      name: 'USD to EUR',
      data: data
    }],
    chart: {
      zooming: {
        type: 'x'
      }
    },
    subtitle: {
      text: document.ontouchstart === undefined ?
        'Click and drag in the plot area to zoom in' :
        'Pinch the chart to zoom in',
      align: 'left'
    },
    xAxis: {
      type: 'datetime'
    },
    yAxis: {
      title: {
        text: 'שיעור ני״ע באגורות'
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      area: {
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1
          },
          stops: [
            [0, Highcharts.getOptions().colors![0]],
            [
              1,
              Highcharts.color(Highcharts.getOptions().colors![0])
                .setOpacity(0).get('rgba')
            ]
          ]
        },
        marker: {
          radius: 2
        },
        lineWidth: 1,
        states: {
          hover: {
            lineWidth: 1
          }
        },
        threshold: null
      }
    },
  } as any

  http = inject(HttpClient);

  ngOnInit(): void {


  }
}