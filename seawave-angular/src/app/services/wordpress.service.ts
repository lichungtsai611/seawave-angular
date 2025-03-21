import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, timeout, catchError, TimeoutError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WordpressService {
  private apiUrl = environment.wordpressApiUrl;
  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any[]> {
    console.log('Fetching posts from:', `${this.apiUrl}/posts`);
    return this.http.get<any[]>(`${this.apiUrl}/posts?_embed`, this.httpOptions).pipe(
      timeout(5000), // 5 seconds timeout
      tap(posts => {
        console.log('Posts fetched successfully:', posts);
        console.log('Total posts received:', posts.length);
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse | TimeoutError): Observable<never> {
    console.error('An error occurred:', error);
    if (error instanceof TimeoutError) {
      console.error('Request timed out');
      return throwError(() => new Error('Request timed out. Please try again.'));
    }
    if (error instanceof HttpErrorResponse) {
      console.error('Error status:', error.status);
      console.error('Error message:', error.message);
      console.error('Error details:', error.error);
    }
    return throwError(() => new Error(`An error occurred: ${error.message}`));
  }
}

