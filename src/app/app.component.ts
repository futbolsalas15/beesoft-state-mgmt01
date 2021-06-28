import { Component, VERSION } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './interfaces';
import { updateName } from './store';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  public name$ = this._store.select(store => store.user.name);

  constructor(private readonly _store: Store<IAppState>) {}

  updateName() {
    this._store.dispatch(updateName({ name: 'Student' }));
  }
}
