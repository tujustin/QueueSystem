import { Injectable } from '@angular/core';
import { AppComponent} from './app.component';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  _tempAppComponent: AppComponent;
  constructor() { }

  updateFirstName(name) {
    this._tempAppComponent.updateFirstName(name);
  }
}
