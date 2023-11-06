import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PensamentoService } from 'src/app/components/pensamentos/pensamento.service';
import { Pensamento } from 'src/app/components/pensamentos/pensamento/pensamento';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.scss']
})
export class CriarPensamentosComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router
  ) {
    // this is intentional
  }

  ngOnInit(): void {
  }

  criarPensamento(): void {
    this.pensamentoService.criarPensamento(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    });
  }

  cancelar(): void {
    this.router.navigate(['/listarPensamento']);
  }
}
