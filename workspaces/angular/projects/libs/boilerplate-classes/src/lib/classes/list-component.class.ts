import { Directive, Input } from '@angular/core';
import { OnDestroyClass } from './on-destroy.class';

@Directive()
export abstract class ListComponentClass extends OnDestroyClass {

  @Input()
  public list: any[] = [];

}
