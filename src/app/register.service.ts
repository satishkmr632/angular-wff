import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class RegisterService {
  httpHeaders = new HttpHeaders({'content-type': 'application/json ; charset=utf-8'});

constructor(private http: HttpClient) { }
registerUser(userData): Observable<any> {
return this.http.post('http://127.0.0.1:8000/rest-auth/registration/', userData);
}

loginUser(userData: any): Observable<any> {
  return this.http.post('http://127.0.0.1:8000/authenticate/', userData, {headers: this.httpHeaders});
  }

  
}
