import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comportilhamento-dados-texte',
  templateUrl: './comportilhamento-dados-texte.component.html',
  styleUrls: ['./comportilhamento-dados-texte.component.css']
})
export class ComportilhamentoDadosTexteComponent {

  @Input() gravadora: string = '';
  @Input() musica!: {nome: string, artista: string};


}
