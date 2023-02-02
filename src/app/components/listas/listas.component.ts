import { Component } from '@angular/core';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent {
  lista = [
    {img: "https://img.joomcdn.net/c81c9194e48d20aa5e1fb28bc82bad20bd73b708_original.jpeg", name: "Charmander", type: "Fogo", msg: "Metal Claw"},
    {img: "https://i.pinimg.com/originals/f5/1d/08/f51d08be05919290355ac004cdd5c2d6.png", name: "Picachu", type: "Elétrico", msg: "Choque do trovão"},
    {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6d1Gi3dqSXNDrophvX-GU9eUVNszmHWWOx_IY_ouZVXZJUY4ieOb8qVO7h45zdbMjd-0&usqp=CAU", name: "Miau", type: "Cat", msg: "Me adota pf 😭"},
    {img: "https://w7.pngwing.com/pngs/286/800/png-transparent-gengar-funny-monster-thumbnail.png", name: "Gengar", type: "Ghost", msg: "*Lamb* *Lamb*"},
    ]

}