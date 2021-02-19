import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User ,Usuario } from '../modelo/usuario';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  providers:[PeliculasService]
})
export class UsuarioComponent implements OnInit {

  public usuario: User = { codigo: 0, mensaje: "", usuario: new Usuario};

  constructor(private usuarioService:PeliculasService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const cedula=this.route.snapshot.paramMap.get("cedula")
    this.usuarioService.getUsuario(cedula).subscribe(resp => (this.usuario=resp))
  }

  public menu(){
    this.router.navigate([''])
  }

}
