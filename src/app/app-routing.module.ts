import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path: '', component: MenuComponent},
  {path: 'peliculas/:nombrePelicula', component: PeliculasComponent},
  {path: 'usuario/:cedula', component:UsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
