import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PensamentoService } from 'src/app/components/pensamentos/pensamento.service';
import { MinusculoValidator } from 'src/app/components/validators-custom/minusculoValidator';
import { CONSTANTS } from 'src/app/constants';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.scss']
})
export class CriarPensamentosComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private fb: FormBuilder,
  ) {
    // this is intentional
  }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(CONSTANTS.REGEX_NOT_ONLY_EMPTY_SPACES)
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(CONSTANTS.MIN_LENGTH),
        MinusculoValidator
      ])],
      modelo: ['modelo1'],
      favorito: [false],
    });
  }

  criarPensamento(): void {
    console.log(this.formulario);
    if (this.formulario.valid) {
      this.pensamentoService.criarPensamento(this.formulario.value).subscribe(() => {
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
