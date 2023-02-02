import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
 show: boolean = false;


 //inverte o boolean e muda a condição de aparecer ou sumir texto
 showMessage(): void {
  this.show = !this.show; //togle
 }

}
