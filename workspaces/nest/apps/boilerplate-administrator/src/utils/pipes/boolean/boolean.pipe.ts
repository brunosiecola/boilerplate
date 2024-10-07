import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class BooleanPipe implements PipeTransform {

  transform(value: null | 'true' | 'false'): null | '1' | '0' {
    switch (value) {
      case 'true':
        return '1';
      case 'false':
        return '0';
      default:
        return null;
    }
  }

}
