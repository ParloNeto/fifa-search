import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Club } from '../core/models/club';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  private readonly apiUrl = `${environment.apiUrl}/clubs`;

  constructor(private http: HttpClient) {}

  getAllClubs(): Observable<Club[]> {
    return this.http.get<Club[]>(this.apiUrl);
  }

  getSpecificClub(club: string): Observable<Club> {
    const url = `${this.apiUrl}/${club}`;
    return this.http.get<Club>(url);
  }
}