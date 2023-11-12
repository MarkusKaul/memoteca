import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pensamento } from 'src/app/components/pensamentos/pensamento/pensamento';
import { Observable } from 'rxjs';
import { ENDPOINTS } from 'src/app/endpoints';
import { CONSTANTS } from 'src/app/constants';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  constructor(private http: HttpClient) { }

  listarPensamentos(page: number, search = CONSTANTS.NO_RESEARCH, favorito: boolean): Observable<Pensamento[]> {
    let params = new HttpParams()
                  .set('_page', page)
                  .set('_limit', CONSTANTS.LIMIT_PER_PAGE);

    if (search?.trim()?.length >= CONSTANTS.MINIMUM_SEARCH_CHARACTERS) {
      params = params.set('q', search);
    }

    if (favorito) {
      params = params.set('favorito', favorito);
    }

    return this.http.get<Pensamento[]>(ENDPOINTS.pensamentos, { params });
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

  mudarFavorito(pensamento: Pensamento): Observable<Pensamento> {
    pensamento.favorito = !pensamento.favorito;
    return this.editarPensamento(pensamento);
  }
}
