import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiConfig } from '../config';


@Injectable({
  providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) { }

    getUsers() {
      return this.http.get<any>(apiConfig.path + `/api/auth/all`);
    }

    getAuth() {
        return this.http.get<any>(apiConfig.path + `/api/auth/auth`);
    }
}
