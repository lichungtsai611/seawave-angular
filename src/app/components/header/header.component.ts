import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuItems = [
    { path: '/about', label: '關於海潮' },
    { path: '/services', label: '服務項目' },
    { path: '/blog', label: '文章分享' },
    { path: '/courses', label: '合作案例' },
    { path: '/contact', label: '聯絡資訊' }
  ];
} 