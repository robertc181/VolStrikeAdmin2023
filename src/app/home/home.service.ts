import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  getRequests() {
    return this.httpClient.get('http://localhost:8081/api/read').pipe(
      map((response: any) => {
        return response.body;
      })
    );
  }
}
