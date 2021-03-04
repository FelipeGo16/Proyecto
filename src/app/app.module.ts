import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PaginaComponent } from './componentes/pagina/pagina.component';
import { HeaderComponent } from './componentes/header/header.component';
import { NavComponent } from './componentes/nav/nav.component';
import { AsideComponent } from './componentes/aside/aside.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaComponent,
    HeaderComponent,
    NavComponent,
    AsideComponent,
    FooterComponent,
    FormularioComponent,
    ContactoComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
