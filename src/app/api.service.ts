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
    return this.http.put<any>(`${this.baseUrl}/requests/:${id}`, {id});
  }

  public deleteRequest(id: string): Observable<any> {
    console.log("fffffffffffffffffffffffffffffffffffff")
    console.log(id)

    return this.http.delete<any>(`${this.baseUrl}/requests/${id}`, {});
  }

  
  // getRequests() {
  //   return this.http.get('/api/objects');
  // }

  // createObject(object: any) {
  //   return this.http.post('/api/objects', object);
  // }

  // updateRequest(id: string, object: any) {
  //   return this.http.put(`/api/objects/${id}`, object);
  // }

  // deleteRequest(id: string) {
  //   return this.http.delete(`/api/objects/${id}`);
  // }
}