import { Component } from '@angular/core';

@Component({
  selector: 'app-duas-vias',
  templateUrl: './duas-vias.component.html',
  styleUrls: ['./duas-vias.component.css']
})
export class DuasViasComponent {
  nome = '';

  mudarNome(){
    this.nome = "Ana";
  }

  valor1=0;
  valor2=0;

}
