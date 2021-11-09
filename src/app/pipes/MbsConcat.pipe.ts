import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'MbsConcat'
})
export class MbsConcatPipe implements PipeTransform {

  transform(value: string, args?: string): any {
    return `${value} ${args}`;
  }

}
