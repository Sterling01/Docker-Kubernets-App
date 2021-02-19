import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pel, Pelicula } from '../modelo/pelicula';
import { User } from '../modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http:HttpClient) {
    console.log("Entra usuario")
  }

  public getPeliculas(nombre: any): Observable<Pel>{
    console.log("nombre es: "+nombre)
    let header = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<Pel>("/helloworld-rs/rs/pelicula/datos?f="+nombre,{headers:header})
  }

  public getUsuario(cedula: any): Observable<User>{
    console.log("nombre es: "+cedula)
    let header = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.get<User>("/registrocivil/rs/usuario/datos?f="+cedula,{headers:header})
  }
}
