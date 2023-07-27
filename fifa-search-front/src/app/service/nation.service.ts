import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Nation } from '../models/nation';

@Injectable({
  providedIn: 'root',
})
export class NationService {
  private readonly apiUrl = 'http://localhost:8080/nations';

  constructor(private http: HttpClient) {}

  getAllNations(): Observable<Nation[]> {
    return this.http.get<Nation[]>(this.apiUrl);
  }

  getSpecificNation(nation: string): Observable<Nation> {
    const url = `${this.apiUrl}/${nation}`;
    return this.http.get<Nation>(url);
  }
}
