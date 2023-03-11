import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private httpClient: HttpClient) {}

  getRequests() {
    debugger;
    return this.httpClient.get('http://localhost:8081/api/requests').pipe(
      map((response: any) => {
        debugger;
        return response.body;
      })
    );
  }
}
