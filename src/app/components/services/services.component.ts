import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    {
      title: '服務項目一',
      description: '服務項目一的詳細說明',
      icon: 'icon-class-1'
    },
    {
      title: '服務項目二',
      description: '服務項目二的詳細說明',
      icon: 'icon-class-2'
    },
    {
      title: '服務項目三',
      description: '服務項目三的詳細說明',
      icon: 'icon-class-3'
    }
  ];
} 