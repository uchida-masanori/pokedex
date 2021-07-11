import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from '../models/pokemons';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemons = POKEMONS;

  pokemon!: { id: number; name: { english: string; japanese: string; chinese: string; french: string; }; type: string[]; base: { HP: number; Attack: number; Defense: number; "Sp. Attack": number; "Sp. Defense": number; Speed: number; }; };

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(map => {
      const id = Number(map.get('id'));
      this.pokemon = this.pokemons[id - 1]
    })
  }
}
