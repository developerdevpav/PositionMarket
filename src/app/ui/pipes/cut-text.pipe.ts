import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'cutText'
})
export class CutTextPipe implements PipeTransform {

  transform(value: string, maxLength: number = 200): string {
    return (value.length > maxLength) ? `${value.substring(0, maxLength)} ...` : value;
  }

}
