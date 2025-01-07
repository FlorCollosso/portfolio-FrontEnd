import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Education } from '../models/education';

@Injectable({
  providedIn: 'root'
})
export class EduServService {

  // Producción
  expURL = 'https://portfolio-backend-0bjo.onrender.com/edu/';

  // Desarrollo
  //expURL = 'http://localhost:8080/edu/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Education[]> {
    return this.httpClient.get<Education[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Education> {
    return this.httpClient.get<Education>(this.expURL + `detail/${id}`);
  }

  public save(edu: Education): Observable<any> {
    return this.httpClient.post<Education>(this.expURL + 'create', edu);
  }

  public update(id: number, edu: Education): Observable<any>{
    return this.httpClient.put<Education>(this.expURL + `update/${id}`, edu);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}
