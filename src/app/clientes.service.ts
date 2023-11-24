import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ICliente } from './Cliente';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ClientesService{
  baseUrl = 'http://localhost:5000/cliente'; //Rota padrao
  constructor(private http: HttpClient) { } 

  newRoom(ICliente: ICliente): Observable<any> {
    const url = `${this.baseUrl}/add-cliente`;
    return this.http.post<ICliente>(url, ICliente, httpOptions);
  }
  
}
