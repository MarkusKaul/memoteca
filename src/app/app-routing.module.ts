import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentosComponent } from 'src/app/components/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { EditarPensamentoComponent } from 'src/app/components/pensamentos/editar-pensamento/editar-pensamento.component';
import { ExcluirPensamentoComponent } from 'src/app/components/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { ListarPensamentoComponent } from 'src/app/components/pensamentos/listar-pensamento/listar-pensamento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listarPensamento',
    pathMatch: 'full'
  },
  {
    path: 'criarPensamento',
    component: CriarPensamentosComponent
  },
  {
    path: 'listarPensamento',
    component: ListarPensamentoComponent
  },
  {
    path: 'excluirPensamento/:id',
    component: ExcluirPensamentoComponent
  },
  {
    path: 'editarPensamento/:id',
    component: EditarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
