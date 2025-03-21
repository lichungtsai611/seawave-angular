import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { WordpressService } from '../../services/wordpress.service';
import { Observable, of, catchError, map } from 'rxjs';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {
  posts: any[] = [];

  constructor(private wordpressService: WordpressService) { }

  ngOnInit(): void {
    this.loadPosts();
  }

  loadPosts() {
    console.log('Starting to load posts...');
    this.wordpressService.getPosts().subscribe({
      next: (posts) => {
        console.log('Posts received:', posts);
        console.log('Number of posts:', posts.length);
        this.posts = posts;
        console.log('Posts array after assignment:', this.posts);
        console.log('Number of posts in component:', this.posts.length);
      },
      error: (error) => {
        console.error('Error loading posts:', error);
      }
    });
  }
}
