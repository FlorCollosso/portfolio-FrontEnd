import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../models/skills';

@Injectable({
  providedIn: 'root'
})
export class SkillServService {

  expURL = 'https://portfolio-backend-g85n.onrender.com/skill/'

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Skills[]> {
    return this.httpClient.get<Skills[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Skills> {
    return this.httpClient.get<Skills>(this.expURL + `detail/${id}`);
  }

  public save(skill: Skills): Observable<any> {
    return this.httpClient.post<Skills>(this.expURL + 'create', skill);
  }

  public update(id: number, skill: Skills): Observable<any>{
    return this.httpClient.put<Skills>(this.expURL + `update/${id}`, skill);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}
