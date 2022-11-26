import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto/contacto.component';
import { DetailsComponent } from './details/details/details.component';
import { DetallesContactoComponent } from './detallesContacto/detallesContacto.component';
import { ListajuegosComponent } from './listajuegos/listajuegos/listajuegos.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  {path: 'listajuegos', component: ListajuegosComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'detallesContacto/:id', component: DetallesContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
