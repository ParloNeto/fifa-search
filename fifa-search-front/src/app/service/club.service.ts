import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Club } from '../models/club';
import { Nation } from '../models/nation';
import { TypeCard } from '../models/typeCard';

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  private apiUrl = '/clubs';

  getAllClubs(): Observable<Club[]> {
    return this.http.get<Club[]>(this.apiUrl);
  }

  getSpecificClub(club: string): Observable<Club> {
    const url = `${this.apiUrl}/${club}`;
    return this.http.get<Club>(url);
  }

  constructor(private http: HttpClient) { }
}