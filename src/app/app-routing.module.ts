import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForoComponent } from './foro/foro.component';
import { FinanzasComponent } from './finanzas/finanzas.component';
import { ContratosComponent } from './contratos/contratos.component';




const routes: Routes = [
  {
    path: 'foro',
    component: ForoComponent
  },
  {
    path: 'finanzas',
    component: FinanzasComponent,
    children: [
      {
        path: 'contratos',
        component: ContratosComponent
      }]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
