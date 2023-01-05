import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pure:false//impure pipe
  pure:true//pure pipe default pipe nature
})
export class FilterPipe implements PipeTransform {

    transform(val: any, searchTearm:any): any {
      return val.filter(function(search) {
        return search.name.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1
      });
    }

}
  