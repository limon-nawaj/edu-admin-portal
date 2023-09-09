import { Component } from '@angular/core';
import { DashboardDataService } from './dashboard-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  dashboardData: any[] = [];

  constructor(private dashboardDataService: DashboardDataService) {}

  ngOnInit() {
    this.dashboardData = this.dashboardDataService.getDashboardData();
  }
}
