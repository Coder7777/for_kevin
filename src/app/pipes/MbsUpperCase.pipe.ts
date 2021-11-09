import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'MbsUpperCase'
})
export class MbsUpperCasePipe implements PipeTransform {

  transform(value: string, args?: any): any {
    return value.toString().toUpperCase();
  }

}
