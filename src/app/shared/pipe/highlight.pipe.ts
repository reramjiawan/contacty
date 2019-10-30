import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {
  transform(value: string, term: string) {
    if (value && term) {
      return value.replace(new RegExp(term, 'i'), str => (!!str ? `<strong>${str}</strong>` : str));
    }
    return null;
  }
}
