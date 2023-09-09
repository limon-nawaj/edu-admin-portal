import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  constructor() { }
  
  getDashboardData() {
    // Replace with actual data fetching logic
    return [
      { title: 'Total Users', value: 100 },
      { title: 'Active Quizzes', value: 20 },
      // Add more data as needed
    ];
  }
}
