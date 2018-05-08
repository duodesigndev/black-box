import { createSelector } from '@ngrx/store'

import { User } from '@models/user'

import * as authActions from './auth.actions'

export const stateIdent = 'auth'

export interface State {
  user:         User | null
  isLoading:    boolean
  isLoggedIn:   boolean
  error:        any
}

export const initialState: State = {
  user:         null,
  isLoading:    false,
  isLoggedIn:   false,
  error:        null
}

export function reducer(
  state = initialState,
  action: authActions.AuthActions
): State {
  switch(action.type) {

    case authActions.LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user
      }
    }

    default: {
      return state
    }

  }
}

export const getCurrentUser = (state: State) => state.user
export const isLoading      = (state: State) => state.isLoading
export const isLoggedIn     = (state: State) => state.isLoggedIn
export const getError       = (state: State) => state.error
