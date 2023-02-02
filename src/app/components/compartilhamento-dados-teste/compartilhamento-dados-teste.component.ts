import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-compartilhamento-dados-teste',
  templateUrl: './compartilhamento-dados-teste.component.html',
  styleUrls: ['./compartilhamento-dados-teste.component.css']
})
export class CompartilhamentoDadosTesteComponent {
  @Input() name: string = '';
  @Input() userData!: {email: string, role: string};
  @Input() idade: number = 0;
  @Input() informacoes!: {cpf: string, kg: number, altura: number};
}
