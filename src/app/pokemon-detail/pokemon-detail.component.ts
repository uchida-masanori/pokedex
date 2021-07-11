import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { POKEMONS } from '../models/pokemons';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  pokemons = POKEMONS;

  pokemon!: { id: number; name: { english: string; japanese: string; chinese: string; french: string; }; type: string[]; base: { HP: number; Attack: number; Defense: number; "Sp. Attack": number; "Sp. Defense": number; Speed: number; }; };

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
    legend: {
      display: false
    }
  };
  public radarChartLabels: Label[] = ['HP', 'こうげき', 'ぼうぎょ', 'とくこう', 'とくぼう', 'すばやさ'];

  public radarChartData: ChartDataSets[] = [];
  public radarChartType: ChartType = 'radar';

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(map => {
      const id = Number(map.get('id'));
      this.pokemon = this.pokemons[id - 1];
      this.radarChartData.push({
        data: [
          this.pokemon.base.HP,
          this.pokemon.base.Attack,
          this.pokemon.base.Defense,
          this.pokemon.base['Sp. Attack'],
          this.pokemon.base['Sp. Defense'],
          this.pokemon.base.Speed,
        ]
      })
    })
  }
}
