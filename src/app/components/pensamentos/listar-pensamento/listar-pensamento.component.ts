import { CONSTANTS } from 'src/app/constants';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from 'src/app/components/pensamentos/pensamento.service';
import { Pensamento } from 'src/app/components/pensamentos/pensamento/pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];
  currentPage: number = CONSTANTS.INITIAL_PAGE;
  hasMoreThoughts: boolean = true;

  constructor(private pensamentoService: PensamentoService) { }

  ngOnInit(): void {
    this.pensamentoService.listarPensamentos(this.currentPage).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }

  showMoreThoughts(): void {
    this.pensamentoService.listarPensamentos(++this.currentPage)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos.push(...listaPensamentos);
        if (listaPensamentos.length < CONSTANTS.LIMIT_PER_PAGE) {
          this.hasMoreThoughts = false;
        }
      });
  }
}
