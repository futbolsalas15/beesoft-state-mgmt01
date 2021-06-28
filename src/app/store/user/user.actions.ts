import { createAction, props } from '@ngrx/store';
import { IUser } from '../../interfaces';

export const updateUser = createAction('[User] Update User', props<IUser>());
export const updateName = createAction(
  '[User] Update Name',
  props<{ name: string }>()
);
