import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform( list: [], name: string): any {
     if (!list) return list
     return list.filter( (character: any) => character.name.toUpperCase().includes(name.toUpperCase()))
  }

}
