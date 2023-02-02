import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  
  name: string = "Roberto";
  age: number = 24;
  job: String = "Programador";
  hobbies = ["Malhar", " Fumar maconha 🥰", " Jogar", " Assistir animes"];
  car = {
    name: "Polo",
    year: 2019
  };

}

