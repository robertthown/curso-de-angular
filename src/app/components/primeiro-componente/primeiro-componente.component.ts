import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent {

  name: String = "Matheus";
  age: number = 30;
  job = "Programador";
  hobbies = ["Correr", "Jogar", "Estudar"];

  car = {
    name: 'polo',
    year: 2019,
  };
}
