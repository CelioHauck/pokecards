import { Card } from './../models/cards/card';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { ResponseCard } from '../models/response';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  private baseUrl: string = `${environment.api}cards`;

  constructor(private http: HttpClient) { }

  public all(): Observable<ResponseCard> {
    return this.http.get<ResponseCard>(`${this.baseUrl}`);
  }

  public name(filter: string): Observable<ResponseCard> {
    const QUERY_STRING = `?name=${filter}`;
    return this.http.get<ResponseCard>(`${this.baseUrl}${QUERY_STRING}`);
  }

  public id(filter: string): Observable<ResponseCard> {
    const QUERY_STRING = `?id=${filter}`;
    return this.http.get<ResponseCard>(`${this.baseUrl}${QUERY_STRING}`);
  }

  
}