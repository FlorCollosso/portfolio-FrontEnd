import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { person } from '../models/person.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  URL = 'http://localhost:8080/person/';
  constructor(private http: HttpClient) { }

  public getPerson(): Observable<person> {
    return this.http.get<person>(this.URL + 'traer/perfil')
  }
}
