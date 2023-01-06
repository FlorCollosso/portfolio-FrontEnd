import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { person } from '../models/person.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  URL = 'https://portfolio-backend-g85n.onrender.com/person/';

  constructor(private http: HttpClient) { }

  public getPerson(): Observable<person> {
    return this.http.get<person>(this.URL + 'traer/perfil')
  }

  public detail(id: number): Observable<person> {
    return this.http.get<person>(this.URL + `detail/${id}`);
  }

  public update(id: number, person: person): Observable<any>{
    return this.http.put<person>(this.URL + `update/${id}`, person);
  }

  public lista(): Observable<person[]> {
    return this.http.get<person[]>(this.URL + 'lista');
  }
}
