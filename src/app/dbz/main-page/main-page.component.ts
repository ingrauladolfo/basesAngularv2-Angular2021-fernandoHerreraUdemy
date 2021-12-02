import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  // personajes: Personaje[] = []
  // get personajes(): Personaje[]{
  //   return this.dbzService.personajes
  // }
  // agregarNuevoPersonaje(argumento: Personaje) {
  //   // debugger
  //   this.personajes.push(argumento)
  // }
  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
  // constructor(private dbzService: DBZService){
  //   // this.personajes = this.dbzService.personajes
  // }
} 
