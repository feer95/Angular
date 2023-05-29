import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'refBook'
})
export class RefBookPipe implements PipeTransform {

  transform(value: number): string 
  {
    let modif : string;
    modif = "Ref- " + value + "."
    return modif;
  }

}
