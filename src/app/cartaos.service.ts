import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartaoCredito } from './CartaoCredito';

@Injectable({
  providedIn: 'root'
})
export class CartaoCreditoService {
  apiUrl = 'http://localhost:5000/CartaoCredito';

  constructor(private http: HttpClient) { }

  listar(): Observable<CartaoCredito[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<CartaoCredito[]>(url);
  }

  buscar(cartaoID: string): Observable<CartaoCredito> {
    const url = `${this.apiUrl}/buscar/${cartaoID}`;
    return this.http.get<CartaoCredito>(url);
  }

  criar(cartao: CartaoCredito): Observable<any> {
    const url = `${this.apiUrl}/criar_cartao`;
    return this.http.post<CartaoCredito>(url, cartao, httpOptions);
  }

  aumentarLimite(cartaoID: string, limite: number): Observable<any> {
    const url = `${this.apiUrl}/AumentarLimite`;
    return this.http.post<any>(url, { cartaoID, limite }, httpOptions);
  }

  bloquearCartao(cartaoID: string, bloquear: boolean): Observable<any> {
    const url = `${this.apiUrl}/Bloqueado`;
    return this.http.post<any>(url, { cartaoID, bloquear }, httpOptions);
  }
}
