import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {


  private apiUrl = 'http://localhost:8080/api/fetch';

  constructor(private http: HttpClient) {}


 getContentFromUrl(url: string): Observable<any> {
    const params = new HttpParams().set('url', url);
    return this.http.get<any>(this.apiUrl, { params });
  }
}
