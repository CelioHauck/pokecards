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
    return this.get();
  }

  public names(filtro: string): Observable<ResponseCard> {
    const QUERY_STRING = `?name=${filtro}`;
    return this.get(QUERY_STRING);
  }

  private get(queryString: string = ""): Observable<ResponseCard> {
    const API_URL = this.baseUrl;
    return this.http.get<ResponseCard>(`${API_URL}${queryString}`);
  }

//   private handleError(error: Response | any) {
//     return Observable.throw(error);
//   }
}
