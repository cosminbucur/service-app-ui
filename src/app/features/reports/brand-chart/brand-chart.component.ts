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

  public chartColors = [
    {
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 2,
    }
  ];
  public chartLabels = ['Continental', 'Pirelli', 'Michelin'];
  public chartType = 'horizontalBar';
  public chartLegend = false;

  public data = [
    {data: [100, 80, 60, 40, 20, 0], label: 'count'},
  ];

  constructor() { }

  public ngOnInit(): void {

  }

}
