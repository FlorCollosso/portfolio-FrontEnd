import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Projects } from '../models/projects';

@Injectable({
  providedIn: 'root'
})
export class ProServService {

  // Producción
  expURL = 'https://portfolio-backend-0bjo.onrender.com/project/';

  // Desarrollo
  //expURL = 'http://localhost:8080/project/';

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
