import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  const endpoint = 'https://hack.kunderlabs.com/exam/telecom/api/products/new';

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }s

  getProducts(): Observable<any> {
    return this.http.get(endpoint).pipe(
    map(this.extractData));
  }

}
