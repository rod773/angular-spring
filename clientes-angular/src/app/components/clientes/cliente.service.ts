import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './cliente';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  private urlEndpoint = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> {
    let res = this.http.get<Cliente[]>(this.urlEndpoint);
    console.log(res);
    return res;
    //return of(CLIENTES);
  }
}
