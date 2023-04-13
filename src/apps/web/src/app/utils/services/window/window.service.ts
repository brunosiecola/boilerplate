import { Injectable } from '@angular/core';

function _window(): any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  get window(): any {
    return _window();
  }

}