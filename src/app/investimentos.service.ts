import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Investimento } from './Investimento';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class InvestimentoService {
  apiUrl = 'http://localhost:5000/Investimento';

  constructor(private http: HttpClient) { }

  listar(): Observable<Investimento[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Investimento[]>(url);
  }

  buscar(investimentoId: string): Observable<Investimento> {
    const url = `${this.apiUrl}/buscar/${investimentoId}`;
    return this.http.get<Investimento>(url);
  }

  criar(investimento: Investimento): Observable<any> {
    const url = `${this.apiUrl}/criar`;
    return this.http.post<Investimento>(url, investimento, httpOptions);
  }
}
