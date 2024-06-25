import { CommonModule } from '@angular/common';
import { Component , OnInit} from '@angular/core';
import { Chart, ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-trade-chart',
  standalone: true,
  imports: [HighchartsChartModule,ChartModule, CommonModule],
  templateUrl: './trade-chart.component.html',
  styleUrl: './trade-chart.component.css'
})
export class TradeChartComponent implements OnInit{
  stock: any | undefined;
  dailyChartOptions: Highcharts.Options = {};
  hourlyChartOptions: Highcharts.Options = {};

  chartOptions: Highcharts.Options = {};
  companyData:any
ngOnInit(): void {

const companyData = {
  "CompanyDetails": {
      "Id": "4343",
      "Name": "אאורה",
      "Logo": "",
      "Site": "WWW.AURAISRAEL.CO.IL",
      "ProfileFooterLink_Eng": ""
  },
  "LastDaysData": [
    {
        "TradeDate": "24/06/2024",
        "LastRate": 1141.0000,
        "Change": -1.21,
        "TurnOver": null,
        "TurnOver1000": 3034.13,
        "IfTraded": true,
        "ShareTradingStatus": null,
        "IsOfferingPrice": false
    },
    {
        "TradeDate": "23/06/2024",
        "LastRate": 1155.0000,
        "Change": -1.70,
        "TurnOver": null,
        "TurnOver1000": 2544.55,
        "IfTraded": true,
        "ShareTradingStatus": null,
        "IsOfferingPrice": false
    },
    {
        "TradeDate": "20/06/2024",
        "LastRate": 1175.0000,
        "Change": -3.61,
        "TurnOver": null,
        "TurnOver1000": 5732.25,
        "IfTraded": true,
        "ShareTradingStatus": null,
        "IsOfferingPrice": false
    },
    {
        "TradeDate": "19/06/2024",
        "LastRate": 1219.0000,
        "Change": 2.01,
        "TurnOver": null,
        "TurnOver1000": 12043.84,
        "IfTraded": true,
        "ShareTradingStatus": null,
        "IsOfferingPrice": false
    },
    {
        "TradeDate": "18/06/2024",
        "LastRate": 1195.0000,
        "Change": -0.17,
        "TurnOver": null,
        "TurnOver1000": 5638.91,
        "IfTraded": true,
        "ShareTradingStatus": null,
        "IsOfferingPrice": false
    }
],
  "LastRates": [
    {
        "Rate": 1167.00,
        "Change": 2.28,
        "DealTime": "12:22",
        "DealDate": "25/06/2024",
        "RateType": "",
        "TradingStage": "",
        "TradingStageDesc": "TradeStage_",
        "TradingStageMob": "TradeStage_Mob_",
        "OverallTurnover": 455.13,
        "InDay": true,
        "TradeDate": "25/06/2024",
        "TradeTime": "12:25"
    },
    {
        "Rate": 1166.00,
        "Change": 2.19,
        "DealTime": "12:22",
        "DealDate": "25/06/2024",
        "RateType": "",
        "TradingStage": "",
        "TradingStageDesc": "TradeStage_",
        "TradingStageMob": "TradeStage_Mob_",
        "OverallTurnover": 9864.36,
        "InDay": true,
        "TradeDate": "25/06/2024",
        "TradeTime": "12:25"
    },
    {
        "Rate": 1166.00,
        "Change": 2.19,
        "DealTime": "12:22",
        "DealDate": "25/06/2024",
        "RateType": "",
        "TradingStage": "",
        "TradingStageDesc": "TradeStage_",
        "TradingStageMob": "TradeStage_Mob_",
        "OverallTurnover": 6622.88,
        "InDay": true,
        "TradeDate": "25/06/2024",
        "TradeTime": "12:25"
    },
    {
        "Rate": 1166.00,
        "Change": 2.19,
        "DealTime": "12:22",
        "DealDate": "25/06/2024",
        "RateType": "",
        "TradingStage": "",
        "TradingStageDesc": "TradeStage_",
        "TradingStageMob": "TradeStage_Mob_",
        "OverallTurnover": 1515.8,
        "InDay": true,
        "TradeDate": "25/06/2024",
        "TradeTime": "12:25"
    },
    {
        "Rate": 1169.00,
        "Change": 2.45,
        "DealTime": "12:18",
        "DealDate": "25/06/2024",
        "RateType": "",
        "TradingStage": "",
        "TradingStageDesc": "TradeStage_",
        "TradingStageMob": "TradeStage_Mob_",
        "OverallTurnover": 46.76,
        "InDay": true,
        "TradeDate": "25/06/2024",
        "TradeTime": "12:25"
    }
  ]
}
 console.log({ss:companyData})
 const dailyData = companyData.LastRates.map((r:any) => ({
  x: new Date(r.TradeDate), 
 y: r.LastRate
 })
 )
//  const dailyData = this.companyData?.LastDaysData.map((day:any) => ({
//   x: new Date(day.TradeDate), 
//   y: day.LastRate
// }));

this.dailyChartOptions = {
  xAxis: {
    type: 'datetime', 
    title: {
      text: 'Trade Date'
    }
  },
  yAxis: {
    title: {
      text: 'Last Rate'
    }
  },
  title: {
    text: 'AADaily Last Rates'
  },
  series: [{
    name: 'Last Rates',
    data: dailyData.map((day: any) => ({
      x: new Date(day.TradeDate),
      y: day.LastRate
    })),
    type: 'line'
  } as unknown as Highcharts.SeriesOptionsType]
};


const allLastRates: { [hour: string]: number[] } = {};
this.companyData.LastRates.forEach((rate :any)=> {
  const hour = rate.DealTime.split(':')[0];
  if (!allLastRates[hour]) {
    allLastRates[hour] = [];
  }
  allLastRates[hour].push(rate.Rate);
});

const timeLabels = [];
for (let hour = 7; hour <= 18; hour++) { 
  timeLabels.push(hour.toString())}
}
}