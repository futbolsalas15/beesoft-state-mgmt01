import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateName } from './user.actions';
import { getName } from './user.selector';

@Injectable({
  providedIn: 'root'
})
export class UserFacade {
  public readonly name$ = this._store.select(getName);

  constructor(private readonly _store: Store) {}

  public setName(name: string) {
    this._store.dispatch(updateName({ name }));
  }
}
