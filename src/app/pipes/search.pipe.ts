import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform( name: string, ...args: unknown[]): unknown {
    return null;
  }

}
