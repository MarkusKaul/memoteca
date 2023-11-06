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

  constructor(private pensamentoService: PensamentoService) { }

  ngOnInit(): void {
    this.pensamentoService.listarPensamentos().subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos;
    });
  }
}
