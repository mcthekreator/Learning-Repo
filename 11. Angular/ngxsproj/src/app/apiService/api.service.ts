import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient)

  constructor() { }


  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
