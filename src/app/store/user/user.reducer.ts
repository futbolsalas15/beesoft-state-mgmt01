import { createReducer, on } from '@ngrx/store';
import { IUser } from '../../interfaces';
import { updateUser } from './user.actions';

const INITIAL_STATE: IUser = {
  name: '',
  email: ''
};

export const userReducer = createReducer(
  INITIAL_STATE,
  on(updateUser, (state, { name, email }) => ({ name, email }))
);
