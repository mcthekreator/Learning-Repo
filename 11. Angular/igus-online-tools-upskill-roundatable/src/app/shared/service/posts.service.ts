import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private http = inject(HttpClient)
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/posts'
  constructor() { }

  public getPosts(): Observable<>{
    return this.http.get(this.apiUrl)
  }}
