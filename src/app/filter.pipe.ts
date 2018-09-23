import { Pipe, PipeTransform } from '@angular/core';
import { Entry } from './Entry';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(entries: Entry[], searchText: string): Entry[] {
    console.log(entries);
    if(!entries) return [];
    if(!searchText || searchText.length == 0) return entries;
    searchText = searchText.toLowerCase();
    return entries.filter( entry => {
      if(!entry.sections) return false;
      for(var i = 0; i < entry.sections.length; i++) {
        if(entry.sections[i].title.toLowerCase().indexOf(searchText) > -1 ||
        entry.sections[i].text.toLowerCase().indexOf(searchText) > -1) return true;
      }
      return false;
    });
  }

}
