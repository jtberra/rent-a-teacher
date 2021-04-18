import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCatalogo'
})
export class FilterCatalogoPipe implements PipeTransform {

  transform(value: any , args: string): any {
    const resultadoCard = [];
    
    if(args === '' ) return value;
    
    for(const card of value){
      if(card.disponibilidad == 'disponible'){
        if(card.nombre.toLowerCase().indexOf(args.toLowerCase())  > -1){
          resultadoCard.push(card);
        };
      };
    };
    return resultadoCard;
  }
}
