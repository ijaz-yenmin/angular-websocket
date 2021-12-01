import { Component } from '@angular/core';
import { SocketService } from './socket.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'liveChart';
  chart: any;
  constructor(private srv: SocketService) {}

  ngOnInit() {
    this.srv.listen('dataUpdate').subscribe((res: any) => {
      console.log(res);
      this.chart.data.datasets[0].data = res;
      this.chart.update();
    });

    this.chart = new Chart('canvas', {
      type: 'bar',
      options: {
        responsive: true,
      },
      data: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
        ],
        datasets: [
          {
            type: 'bar',
            label: 'Sales Performed',
            backgroundColor: [
              '#3e95cd',
              '#8e5ea2',
              '#3cba9f',
              '#e8c3b9',
              '#c45850',
              '#e8c3b9',
              '#8e5ea2',
              '#3e95cd',
            ],
            data: [],
          },
        ],
      },
    });
  }
}
