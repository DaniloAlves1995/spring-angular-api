import { Pipe, PipeTransform } from '@angular/core';

//nome do pipe para ser referenciado
@Pipe({
  name: 'gender'
})
//pipes em angular são classes que mapeiam os valores de entrada para outros valores
export class GenderPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    switch(value){
      case 'male':  return 'Male';
      case 'female': return 'Female';
      case 'lgbt': return 'LGBTQIA+';
      case 'not_want': return 'I prefer not to define';
    }

    return 'male';
  }

}
