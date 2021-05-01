import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroSolicitudes'
})
export class FiltroSolicitudesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
