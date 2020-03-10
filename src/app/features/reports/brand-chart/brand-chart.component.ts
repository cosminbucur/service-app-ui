import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-brand-chart',
  templateUrl: './brand-chart.component.html',
  styleUrls: ['./brand-chart.component.scss']
})
export class BrandChartComponent implements OnInit {

  public chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
              beginAtZero: true
          }
      }]
  }
  };

  public colors = [
      // 'rgba(255, 99, 132, 0.2)',
      // 'rgba(54, 162, 235, 0.2)',
      // 'rgba(255, 206, 86, 0.2)',
      // 'rgba(75, 192, 192, 0.2)',
      // 'rgba(153, 102, 255, 0.2)',
      // 'rgba(255, 159, 64, 0.2)'
      'blue'
  ];
  public chartLabels = ['Continental', 'Pirelli', 'Michelin'];
  public chartType = 'bar';
  public chartLegend = false;

  public data = [
    {data: [100, 80, 60, 40, 20, 0], label: 'count'},
  ];

  constructor() { }

  ngOnInit() {

  }

}
