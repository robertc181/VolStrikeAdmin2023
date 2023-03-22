import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://localhost:8081/api'; // replace with your server URL

  constructor(private http: HttpClient) { }

  public getRequests(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/requests`);
  }

  public updateRequest(id: string): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/request/${id}`, {});
  }

  public deleteRequest(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/request/${id}`);
  }
}