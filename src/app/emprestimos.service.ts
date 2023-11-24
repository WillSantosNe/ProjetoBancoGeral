import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IEmprestimo } from './Emprestimo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class EmprestimosService {
  baseUrl = 'http://localhost:5000/emprestimo'; //Rota padrao
  constructor(private http: HttpClient) { } 

  newRoom(IEmprestimo: IEmprestimo): Observable<any> {
    const url = `${this.baseUrl}/add-cliente`;
    return this.http.post<IEmprestimo>(url, IEmprestimo, httpOptions);
  }
}
