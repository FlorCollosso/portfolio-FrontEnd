import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Works } from '../models/works';

@Injectable({
  providedIn: 'root'
})
export class ExpServService {

  expURL = 'https://portfolio-backend-g85n.onrender.com/explab/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Works[]> {
    return this.httpClient.get<Works[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Works> {
    return this.httpClient.get<Works>(this.expURL + `detail/${id}`);
  }

  public save(works: Works): Observable<any> {
    return this.httpClient.post<Works>(this.expURL + 'create', works);
  }

  public update(id: number, works: Works): Observable<any>{
    return this.httpClient.put<Works>(this.expURL + `update/${id}`, works);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}
