import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from 'src/app/components/pensamentos/pensamento.service';
import { Pensamento } from 'src/app/components/pensamentos/pensamento/pensamento';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.scss']
})
export class EditarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: '',
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

  editarPensamento(): void {
    this.pensamentoService.editarPensamento(this.pensamento).subscribe(() => {
      this.router.navigate(['/listarPensamento']);
    })
  }

  cancelar(): void {
    this.router.navigate(['/listarPensamento']);
  }
}
