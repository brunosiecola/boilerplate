import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly httpClient = inject(HttpClient);

  public get(url: string): Observable<any> {
    return this.httpClient.get(`${environment.baseUrl}/${url}`);
  }

  public post(url: string, body: any): Observable<any> {
    return this.httpClient.post(`${environment.baseUrl}/${url}`, body);
  }

  public put(url: string, body: any): Observable<any> {
    return this.httpClient.put(`${environment.baseUrl}/${url}`, body);
  }

  public patch(url: string, body: any): Observable<any> {
    return this.httpClient.patch(`${environment.baseUrl}/${url}`, body);
  }

  public delete(url: string): Observable<any> {
    return this.httpClient.delete(`${environment.baseUrl}/${url}`);
  }

}
