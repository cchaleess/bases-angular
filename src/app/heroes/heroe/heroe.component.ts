import { Component } from "@angular/core";

@Component({
    selector: "app-heroe",
    templateUrl: "heroe.component.html",
})


export class HeroeComponent{

    nombre: string = "Aquaman";
    edad : number = 500;

    get nombreCapitalizado(){
        return this.nombre.toUpperCase();
    }

    obtenerEdad(): string{
        return `${this.nombre} tiene ${this.edad} años`;
    }

    cambiarHeroe(nombre: string): void{
        this.nombre = nombre;
    }

    cambiarEdad(edad: number): void{
        this.edad = edad;
    }
    


}