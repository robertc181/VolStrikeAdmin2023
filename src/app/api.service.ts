import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ApiService {
  // private baseUrl = 'http://localhost:8081/api';
  private baseUrl = 'api'; // replace with your server URL
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  public submitLoginForm(loginData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, loginData);
  }

  public getRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/read`);
  }

  public updateRequest(id: string): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/update/:${id}`, { id });
  }

  public deleteRequest(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/delete/:${id}`, {
      headers: this.headers,
    });
  }
}
