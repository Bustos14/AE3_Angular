import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ListajuegosComponent } from './listajuegos/listajuegos/listajuegos.component';
import { DetailsComponent } from './details/details/details.component';
import { ContactoComponent } from './contacto/contacto/contacto.component';
import { DetallesContactoComponent } from './detallesContacto/detallesContacto.component';
@NgModule({
  declarations: [				
    AppComponent,
    LoginComponent,
    EncabezadoComponent,
    ListajuegosComponent,
    DetailsComponent,
    ContactoComponent,
    DetallesContactoComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
