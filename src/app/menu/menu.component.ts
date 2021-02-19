import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers:[PeliculasService]
})
export class MenuComponent implements OnInit {

  nombrePelicula : string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public buscarPelicula(id:any){
    console.log(id)
    console.log(this.nombrePelicula)
    this.router.navigate(['peliculas/'+id])
  }

  public buscarUsuario(cedula:any){
    console.log(cedula)
    console.log(this.nombrePelicula)
    this.router.navigate(['usuario/'+cedula])
  }

}
