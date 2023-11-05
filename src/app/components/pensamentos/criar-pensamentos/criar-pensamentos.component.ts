import { Component, OnInit } from '@angular/core';
import { Pensamento } from 'src/app/components/pensamentos/pensamento/pensamento';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.scss']
})
export class CriarPensamentosComponent implements OnInit {

  pensamento: Pensamento = {
    id: 1,
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento(): void {
    alert('Pensamento Criado com Sucesso!');
  }

  cancelar(): void {

  }
}
