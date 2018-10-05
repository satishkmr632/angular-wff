import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
// import { HttpHeaders } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
import { Post } from './post.model'
import { post } from 'selenium-webdriver/http';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     'Authorization': 'my-auth-token'
//   })
// };

@Injectable()
export class PostService {
  postsUrl = 'http://127.0.0.1:8000/postapi/';
  constructor(private http: HttpClient) {}

  /** GET posts from the server */
  getPosts (): Observable<Post[]> {
    // console.log(this.http.get<Post[]>(this.postsUrl))
    var posts_data = this.http.get<Post[]>(this.postsUrl);
    // console.log(posts_data);
    return posts_data
  }

  /** POST: add a new post to the database */
  addPost (post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post)
  }

  /** DELETE: delete the post from the server */
  deletePost (id: number): Observable<{}> {
    return this.http.delete(this.postsUrl)
    
}

}
