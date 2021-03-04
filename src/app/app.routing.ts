//Importar los modulos del router de angular
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importar componentes
import { PaginaComponent } from './componentes/pagina/pagina.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

//Array de rutas
const appRoutes: Routes = [
    {path: '', component: PrincipalComponent},
    {path: 'home', component: PrincipalComponent},
    {path: 'pagina', component: PaginaComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'contacto', component: ContactoComponent}
];

//Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);