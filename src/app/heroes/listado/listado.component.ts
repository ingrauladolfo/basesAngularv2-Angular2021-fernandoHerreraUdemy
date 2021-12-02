import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent{
  heroes: string[] = ['Spiderman', 'Ironman', 'Thor', 'Hulk','Captain America'];
  heroeBorrado: string = '';
  borrarHeroe(){
    // this.heroes.shift()
    // const heroeBorrado = this.heroes.shift();
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
