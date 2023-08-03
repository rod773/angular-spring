import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';

import { DirectivaComponent } from './components/directiva/directiva.component';

const routes: Routes = [
  {
    path: 'clientes',
    component: ClientesComponent,
  },
  {
    path: '',
    redirectTo: '/clientes',
    pathMatch: 'full',
  },

  {
    path: 'directivas',
    component: DirectivaComponent,
  },

  {
    path: '*',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
