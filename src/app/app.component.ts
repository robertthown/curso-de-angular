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
    cpf: "052.830.911-04",
    kg: 80,
    altura: 178,
  };

  title = 'curso-angular';
}
