import { CONSTANTS } from 'src/app/constants';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from 'src/app/components/pensamentos/pensamento.service';
import { Pensamento } from 'src/app/components/pensamentos/pensamento/pensamento';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];
  listaFavoritos: Pensamento[] = [];
  currentPage = CONSTANTS.INITIAL_PAGE;
  hasMoreThoughts = true;
  searchThought = '';
  favorito = false;
  titulo = CONSTANTS.TITLES.MURAL;

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.pensamentoService.listarPensamentos(this.currentPage, this.searchThought, this.favorito).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }

  showMoreThoughts(): void {
    this.pensamentoService.listarPensamentos(++this.currentPage, this.searchThought, this.favorito)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos.push(...listaPensamentos);
        if (listaPensamentos.length < CONSTANTS.LIMIT_PER_PAGE) {
          this.hasMoreThoughts = false;
        }
      });
  }

  searchForThought(): void {
    this.currentPage = CONSTANTS.INITIAL_PAGE;
    this.hasMoreThoughts = true;
    this.pensamentoService.listarPensamentos(this.currentPage, this.searchThought, this.favorito)
      .subscribe(listaPensamentos => {
        this.listaPensamentos = listaPensamentos;
        if (listaPensamentos.length < CONSTANTS.LIMIT_PER_PAGE) {
          this.hasMoreThoughts = false;
        }
      })
  }

  reload(): void {
    this.titulo = CONSTANTS.TITLES.MURAL;
    this.favorito = false;
    this.currentPage = CONSTANTS.INITIAL_PAGE;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
  }

  listarFavoritos(): void {
    this.titulo = CONSTANTS.TITLES.FAVORITOS;
    this.favorito = true;
    this.currentPage = CONSTANTS.INITIAL_PAGE;
    this.hasMoreThoughts = true;
    this.pensamentoService.listarPensamentos(this.currentPage, this.searchThought, this.favorito)
      .subscribe(listaFavoritos => {
        this.listaPensamentos = listaFavoritos;
        this.listaFavoritos = listaFavoritos;
      });
  }
}
