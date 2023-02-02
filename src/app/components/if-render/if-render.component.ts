import { Component } from '@angular/core';

@Component({
  selector: 'app-if-render',
  templateUrl: './if-render.component.html',
  styleUrls: ['./if-render.component.css']
})
export class IfRenderComponent {
  canShow: boolean = true;
  name = "Roberto";
  var2 = "conteudo-e-diferente";


}
