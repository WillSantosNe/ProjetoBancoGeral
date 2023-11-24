import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movimentacao, TipoMovimentacao } from './Movimentacao';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {
  private apiUrl = 'http://localhost:5000/Movimentacao';

  constructor(private http: HttpClient) { }

  listar(): Observable<Movimentacao[]> {
      const url = `${this.apiUrl}/listar`;
      return this.http.get<Movimentacao[]>(url);
  }

  buscar(movimentacaoId: number): Observable<Movimentacao> {
      const url = `${this.apiUrl}/buscar/${movimentacaoId}`;
      return this.http.get<Movimentacao>(url);
  }

  criar(movimentacao: Movimentacao): Observable<Movimentacao> {
      const url = `${this.apiUrl}/criar`;
      return this.http.post<Movimentacao>(url, movimentacao, httpOptions);
  }

  movimentar(contaId: number, movimentacao: { valor: number, tipo: TipoMovimentacao }): Observable<any> {
      const url = `${this.apiUrl}/movimentar/${contaId}`;
      return this.http.post(url, movimentacao, httpOptions);
  }
}
