import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  getRequests() {
    return this.httpClient.get('/read').pipe(
      map((response: any) => {
        return response.body;
      })
    );
  }
}
