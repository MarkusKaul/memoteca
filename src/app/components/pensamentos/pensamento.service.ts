import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from 'src/app/components/pensamentos/pensamento/pensamento';
import { Observable } from 'rxjs';
import { ENDPOINTS } from 'src/app/endpoints';
import { CONSTANTS } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  constructor(private http: HttpClient) { }

  listarPensamentos(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(ENDPOINTS.pensamentos);
  }

  criarPensamento(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(ENDPOINTS.pensamentos, pensamento);
  }

  editarPensamento(pensamento: Pensamento): Observable<Pensamento> {
    const url = ENDPOINTS.pensamentoID.replace(CONSTANTS.ID, pensamento.id!.toString());
    return this.http.put<Pensamento>(url, pensamento);
  }

  excluirPensamento(id: number): Observable<Pensamento> {
    const url = ENDPOINTS.pensamentoID.replace(CONSTANTS.ID, id.toString());
    return this.http.delete<Pensamento>(url);
  }

  buscarPorId(id: number): Observable<Pensamento> {
    const url = ENDPOINTS.pensamentoID.replace(CONSTANTS.ID, id.toString());
    return this.http.get<Pensamento>(url);
  }
}
