import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})

export class ListRenderComponent {
 
  animals: Animal[] = [];


  animalDetails = ''

  constructor(private listSerice: ListService){
    this.getAnimals();
    }

  showAge(animal: Animal): void{
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal: Animal){
    console.log("Removendo animal...");
    this.animals = this.listSerice.remove(this.animals, animal);
    
  }

  getAnimals(): void{
    this.listSerice.getAll().subscribe((animals) => (this.animals = animals));
  }

}
