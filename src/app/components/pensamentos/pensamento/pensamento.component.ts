import { Component, Input, OnInit } from '@angular/core';
import { PensamentoService } from 'src/app/components/pensamentos/pensamento.service';
import { Pensamento } from 'src/app/components/pensamentos/pensamento/pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.scss']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(private pensamentoService: PensamentoService) { }

  ngOnInit(): void {
  }

  larguraPensamento() {
    if (this.pensamento.conteudo.length > 255) {
      return 'pensamento-g';
    }
    return 'pensamento-p';
  }
}
