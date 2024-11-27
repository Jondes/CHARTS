import { LineChartComponent } from './line-chart/line-chart.component';
import { Component } from '@angular/core';

import { BarChartComponent } from "./bar-chart/bar-chart.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BarChartComponent, LineChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bar-charts';
}
