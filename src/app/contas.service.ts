import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conta } from './Conta';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type' : 'application/json'
    })
}

@Injectable({
    providedIn: 'root'
})


@Injectable({
  providedIn: 'root'
})
export class ContasService {
  apiUrl = 'http://localhost:5000/Conta';
  constructor(private http: HttpClient) { }
  
  listar(): Observable<Conta[]> {
      const url = `${this.apiUrl}/listar`;
      return this.http.get<Conta[]>(url);
  }

  // Retorna uma Conta <Conta>
  buscar(contaId: string): Observable<Conta> {
      const url = `${this.apiUrl}/buscar/${contaId}`;
      return this.http.get<Conta>(url);
  }

  // Sem retornos <any>
  criar(conta: Conta): Observable<any> {
      const url = `${this.apiUrl}/criar`;
      return this.http.post<Conta>(url, conta, httpOptions);
  }
}
 
