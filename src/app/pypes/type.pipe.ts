import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  japanese: { [index: string]: string; } ={
    Grass: 'くさ',
    Poison: 'どく',
    Fire: 'ほのお',
    Flying: 'ひこう',
    Water: 'みず',
    Bug: 'むし',
    Normal: 'ノーマル',
    Ground: 'じめん',
    Fairy: 'フェアリー',
    Fighting: 'かくとう',
    Psychic: 'エスパー',
    Ghost: 'ゴースト',
    Rock: 'いわ',
    Electric: 'でんき',
    Dark: 'あく',
    Dragon: 'ドラゴン',
    Ice: 'こおり',
    Steel: 'はがね'
  };

  transform(types: string[], ...args: any[]): any {
    return types.map(type => this.japanese[type] || type);
  }
}
