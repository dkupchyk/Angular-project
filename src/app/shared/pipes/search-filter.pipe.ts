import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'searchFilter'})
export class SearchFilterPipe implements PipeTransform {
  transform(value: any, search: string): any {
    if (!search) {
      return value;
    }
    const solution = value.filter(item => {
      if (!item) {
        return;
      }
      return item.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    return solution;
  }
}
