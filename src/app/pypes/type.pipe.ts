import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  japanese: { [index: string]: string; } ={
    Grass: '草',
    Poison: '毒'

  };

  transform(types: string[], ...args: any[]): any {
    return types.map(type => this.japanese[type] || type);
  }
}
