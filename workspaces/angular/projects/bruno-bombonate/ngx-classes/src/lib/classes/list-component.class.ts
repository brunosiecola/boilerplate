import { Directive, Input } from '@angular/core';

@Directive()
export abstract class ListComponentClass {

  @Input()
  public list: any[] = [];

}
