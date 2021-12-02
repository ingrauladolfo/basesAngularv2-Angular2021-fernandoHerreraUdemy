import { Component, Input,Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
  styleUrls: ['./agregar-personaje.component.css']
})
export class AgregarPersonajeComponent{
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }
  constructor(private dbzService: DBZService){}
  // @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter();
  agregarPersonajes() {
    if (this.nuevo.nombre.trim().length === 0) { return; }
    // this.onNewCharacter.emit(this.nuevo)
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      nombre: '',
    poder: 0
    }
  }
  // cambiarNombre(event: any) {
  //   console.log(event.target.value)
  // }

}
