import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})

export class ListRenderComponent {
  animals: Animal[] = [
    {name: "Turca", type: "Dog", age: 1},
    {name: "Tom", type: "Cat", age: 4},
    {name: "Frida", type: "Perequito", age: 10},
    {name: "Bob", type: "Cavalo", age: 2},
  ];

  animal: Animal = {
    name: 'Teste',
    type: 'Alguma coisa',
    age: 10
  };

  animalDetails = ''

  showAge(animal: Animal): void{
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

}
