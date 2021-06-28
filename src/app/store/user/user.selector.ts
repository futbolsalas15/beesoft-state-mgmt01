import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAppState, IUser } from '../../interfaces';

const userState = createFeatureSelector<IAppState, IUser>('user');

export const getName = createSelector(
  userState,
  state => state.name
);
