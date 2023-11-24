import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Seguro } from './Seguro';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable({
  providedIn: 'root'
})
export class SeguroService {
  apiUrl = 'http://localhost:5000/Seguro';

  constructor(private http: HttpClient) { }
  
  listar(): Observable<Seguro[]> {
      const url = `${this.apiUrl}/listar`;
      return this.http.get<Seguro[]>(url);
  }

  buscar(seguroId: number): Observable<Seguro> {
      const url = `${this.apiUrl}/buscar/${seguroId}`;
      return this.http.get<Seguro>(url);
  }

  alterar(seguroId: number, seguro: Seguro): Observable<any> {
      const url = `${this.apiUrl}/alterar/${seguroId}`;
      return this.http.put(url, seguro, httpOptions);
  }

  renovar(seguroId: number, dataFim: Date): Observable<any> {
      const url = `${this.apiUrl}/Renovar/${seguroId}`;
      return this.http.put(url, { dataFim }, httpOptions);
  }

  alterarValorCoberto(seguroId: number, novoValor: number): Observable<any> {
      const url = `${this.apiUrl}/alterarValorCoberto/${seguroId}`;
      return this.http.get(url, { ...httpOptions, params: { novoValor } });
  }

  deletar(seguroId: number): Observable<any> {
      const url = `${this.apiUrl}/deletar/${seguroId}`;
      return this.http.delete(url, httpOptions);
  }

  criar(seguro: Seguro): Observable<any> {
    const url = `${this.apiUrl}/criar`;
    return this.http.post<Seguro>(url, seguro, httpOptions);
}
}
