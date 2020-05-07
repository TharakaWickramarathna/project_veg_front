import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, from } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

// import {} from '../'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  USER_REGISTER_LINK = 'http://localhost:5000/users/register';
  USER_UPDATE_LINK = 'http://localhost:5000/users/update/';
  USER_DELETE_LINK = 'http://localhost:5000/users/';
  USER_ALL_LINK = 'http://localhost:5000/users/all';

  userdata: any;

  constructor(private http: HttpClient) { }

  registerUser(userdata) {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post<any>(this.USER_REGISTER_LINK, userdata, { headers: header });
  };
  updateUser(id) {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.post<any>(this.USER_UPDATE_LINK+id, { headers: header });
  };
  deleteUser(id) {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.delete<any>(this.USER_DELETE_LINK+id, { headers: header });
  };
  getAllUser() {
    let header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    return this.http.get<any>(this.USER_ALL_LINK, { headers: header });
  };

}

