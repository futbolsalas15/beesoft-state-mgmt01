import { Action, ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../interfaces';
import { userReducer } from './user';

export const rootReducer: ActionReducerMap<IAppState, Action> = {
  user: userReducer
};
