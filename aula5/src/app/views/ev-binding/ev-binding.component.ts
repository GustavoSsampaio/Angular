import { Component } from '@angular/core';

@Component({
  selector: 'app-ev-binding',
  templateUrl: './ev-binding.component.html',
  styleUrls: ['./ev-binding.component.css']
})
export class EvBindingComponent {
  pokemon = '';

  escolherPokemon(pokemon:string){
    this.pokemon = pokemon;
  };
}
