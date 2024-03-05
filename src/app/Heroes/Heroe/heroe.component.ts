import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { retry } from "rxjs";

@Component({
    selector: 'app-heroe',
    standalone: true,
    imports: [CommonModule],
    templateUrl: 'heroe.component.html',

})
export class HeroeComponent{
    nombre : string = 'IronMan';
    edad : number = 45;

    get nombreCapitalizado () : string{
        return this.nombre.toUpperCase();
    }
    
    obtenerNombre() : string{
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre() : void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad() : void {
        this.edad = 21;
    }
}