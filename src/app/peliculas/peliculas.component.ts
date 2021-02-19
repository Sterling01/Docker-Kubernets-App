import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pel, Pelicula } from '../modelo/pelicula';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers:[PeliculasService]
})
export class PeliculasComponent implements OnInit {

  public peliculas: Pel = { codigo: 0, mensaje: "", pelicula: new Pelicula};

  constructor(private peliculaService:PeliculasService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const nombre=this.route.snapshot.paramMap.get("nombrePelicula")
    this.peliculaService.getPeliculas(nombre).subscribe(resp => (this.peliculas=resp))
  }

  public menu(){
    this.router.navigate([''])
  }

}
