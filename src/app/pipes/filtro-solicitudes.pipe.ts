import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroSolicitudes'
})
export class FiltroSolicitudesPipe implements PipeTransform {

  transform(value: any): any {
    const resultadoCard = [];
    
    for(const card of value){
      if(card.estado == 'PENDIENTE'){
          resultadoCard.push(card);
      };
    };
    return resultadoCard;
  }

}
