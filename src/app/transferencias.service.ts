import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ITransferencia } from './Transferencia';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class EmprestimosService {
  baseUrl = 'http://localhost:5000/transferencia'; //Rota padrao
  constructor(private http: HttpClient) { } 

  newRoom(ITransferencia: ITransferencia): Observable<any> {
    const url = `${this.baseUrl}/add-transferencia`;
    return this.http.post<ITransferencia>(url, ITransferencia, httpOptions);
  }
}
