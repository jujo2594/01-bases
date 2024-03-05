import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  standalone: true,
  imports: [CommonModule, 
            FormsModule
          ],
  templateUrl: './agregar.component.html',

})
export class AgregarComponent {

  @ Input() nuevo : Personaje = {
    nombre: '',
    poder: 0
  }

  constructor( private dbzService : DbzService ){}

  // Permite emitir eventos , se debe especificar el tipo de dato a enviar en este caso de tipo "Personaje"
  // @Output() onNuevoPersonaje : EventEmitter<Personaje> = new EventEmitter();

  agregar () {
    if (this.nuevo.nombre.trim().length === 0){ return; }
    
    //En esta parte del código se emite el evento. 
    // this.onNuevoPersonaje.emit(this.nuevo);

    this.dbzService.agregarPersonaje( this.nuevo );

    this.nuevo = {
      nombre : '',
      poder : 0
    }
  
  }
}
