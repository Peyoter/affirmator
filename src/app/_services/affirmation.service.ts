import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiConfig } from '../config';

@Injectable({
  providedIn: 'root'
})

export class AffirmationService {

    constructor(private http: HttpClient) { }

    getAffirmations() {
        return this.http.get<any>(apiConfig.path + `/api/auth/affirmation`);
    }

    store(title: string) {
        return this.http.post<any>(apiConfig.path + `/api/auth/affirmation`, {title});
    }

    update(id: number, title: string) {
        return this.http.put<any>(apiConfig.path + `/api/auth/affirmation/` + id, {title});
    }

    delete(id) {
        return this.http.delete<any>(apiConfig.path + `/api/auth/affirmation/` + id);
    }
}