import { Component } from '@angular/core';
import { StatsService } from 'src/app/Services/stats.service';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  user: any = JSON.parse(localStorage.getItem('user') as string);
  stats: any = null;
  chart: any | undefined;



  constructor(private statsService: StatsService) {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.statsService.getStats().subscribe((data) => {
      this.stats = (data.data as any);
      this.createChart();
    });
  }

  createChart(): void {
    const productsByDay: any = {};
    this.stats.produits.forEach((produit: any) => {
      const createdAt = new Date(produit.created_at).toLocaleDateString();
      if (!productsByDay[createdAt]) {
        productsByDay[createdAt] = 1;
      } else {
        productsByDay[createdAt]++;
      }
    });

    // Convert object to arrays for labels and data
    const labels = Object.keys(productsByDay);
    const data = Object.values(productsByDay);
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Products Created',
          data: data,
          backgroundColor: 'rgba(192,	170,	129, 0.2)',
          borderColor: 'rgba(192,	170,	129, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    console.log(this.chart);
  }



}
