import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.component.html',

})
export class ListadoComponent {
  heroes: string[] = ['Spiderman', 'IronMan', 'Thor', 'Hulk', 'Black-Panther'];

  heroeBorrado : string = '';

  borrarHeroe() : string {
    return this.heroeBorrado = this.heroes.pop() || '';
  }

}
