import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {
    if (!items) {
      return [];
    }

    if (!value || value.length === 0) {
      return items;
    }
    return items.filter(item => item[field].toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

}
