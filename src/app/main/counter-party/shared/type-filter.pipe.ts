import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeFilter'
})
export class TypeFilterPipe implements PipeTransform {

  transform(value: any[], args: number): unknown {
    if (!value) {
      return null;
    }
    return value?.filter((optionValue: any) => optionValue.keyCode === args)[0]?.value;
  }

}
