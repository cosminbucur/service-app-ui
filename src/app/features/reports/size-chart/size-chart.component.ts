import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-size-chart',
  templateUrl: './size-chart.component.html',
  styleUrls: ['./size-chart.component.scss']
})
export class SizeChartComponent implements OnInit {

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
  public chartLabels = ['P215/65R15 95H', 'P215/65R17 95H'];
  public chartType = 'bar';
  public chartLegend = false;

  public data = [
    {data: [100, 80, 60, 40, 20, 0], label: 'count'},
  ];


  constructor() { }

  ngOnInit() {
  }

}
