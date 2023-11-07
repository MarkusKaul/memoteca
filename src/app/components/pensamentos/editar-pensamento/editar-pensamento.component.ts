import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from 'src/app/components/pensamentos/pensamento.service';
import { Pensamento } from 'src/app/components/pensamentos/pensamento/pensamento';
import { MinusculoValidator } from 'src/app/components/validators-custom/minusculoValidator';
import { CONSTANTS } from 'src/app/constants';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.scss']
})
export class EditarPensamentoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.createForm();
    this.pensamentoService.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      this.fillForm(pensamento);
    })
  }

  createForm(): void {
    this.formulario = this.fb.group({
      id: [''],
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(CONSTANTS.REGEX_NOT_ONLY_EMPTY_SPACES)
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(CONSTANTS.MIN_LENGTH),
        MinusculoValidator
      ])],
      modelo: ['']
    });
  };

  fillForm(pensamento: Pensamento): void {
    this.formulario.patchValue({
      id: pensamento.id,
      conteudo: pensamento.conteudo,
      autoria: pensamento.autoria,
      modelo: pensamento.modelo
    });
  }

  editarPensamento(): void {
    if (this.formulario.valid) {
      this.pensamentoService.editarPensamento(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento']);
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/listarPensamento']);
  }

  desabilitarBotao() {
    if (this.formulario.valid) {
      return 'botao';
    }
    return 'botao__desabilitado';
  }
}
