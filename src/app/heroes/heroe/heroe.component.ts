import { Component } from '@angular/core';
@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'    
  })
export class HeroeComponent{
nombre: string = 'Ironman';
Edad:number = 45;

get nombreCapitalizado():string{
  return this.nombre.toUpperCase();
}

obtenerNombre():string{
  return `${this.nombre} - ${this.Edad}`;
}
cambiarNombre(Nnombre: string){
 this.nombre = Nnombre;
}

cambiarEdad(Nedad: number){
  this.Edad = Nedad;
 }

}