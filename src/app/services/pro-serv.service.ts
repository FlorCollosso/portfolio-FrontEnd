import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from '../models/projects';

@Injectable({
  providedIn: 'root'
})
export class ProServService {

  expURL = 'http://florcollosso.us-east-1.elasticbeanstalk.com/project/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Projects[]> {
    return this.httpClient.get<Projects[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Projects> {
    return this.httpClient.get<Projects>(this.expURL + `detail/${id}`);
  }

  public save(pro: Projects): Observable<any> {
    return this.httpClient.post<Projects>(this.expURL + 'create', pro);
  }

  public update(id: number, pro: Projects): Observable<any>{
    return this.httpClient.put<Projects>(this.expURL + `update/${id}`, pro);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}
