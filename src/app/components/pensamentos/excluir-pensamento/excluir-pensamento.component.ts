import { Pensamento } from 'src/app/components/pensamentos/pensamento/pensamento';
import { Component, OnInit } from '@angular/core';
import { PensamentoService } from 'src/app/components/pensamentos/pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrls: ['./excluir-pensamento.component.scss']
})
export class ExcluirPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false,
  }

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pensamentoService.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.pensamento = pensamento;
    })
  }

  excluirPensamento(): void {
    if (this.pensamento.id) {
      this.pensamentoService.excluirPensamento(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      })
    }
  }

  cancelar(): void {
    this.router.navigate(['/listarPensamento']);
  }
}
