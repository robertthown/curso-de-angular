import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  userName = "Roberto";

  userData = {
    email: 'robertomello404@gmail.com',
    role: 'Admin',
  };

  idade = 24;

  informacoes = {
    cpf: "000.000.000-00",
    kg: 80,
    altura: 1.78,
  };

  title = 'curso-angular';
}
