import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Club } from '../models/club';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  private readonly apiUrl = 'http://localhost:8080/clubs';

  constructor(private http: HttpClient) {}

  getAllClubs(): Observable<Club[]> {
    return this.http.get<Club[]>(this.apiUrl);
  }

  getSpecificClub(club: string): Observable<Club> {
    const url = `${this.apiUrl}/${club}`;
    return this.http.get<Club>(url);
  }
}