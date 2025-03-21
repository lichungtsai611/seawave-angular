import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  courses = [
    {
      title: '案例一',
      description: '案例一的詳細說明',
      duration: '8週',
      price: 'NT$99,000'
    },
    {
      title: '案例二',
      description: '案例二的詳細說明',
      duration: '12週',
      price: 'NT$149,000'
    },
    // Add more courses as needed
  ];
} 