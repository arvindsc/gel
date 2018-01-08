import * as auth from './auth.actions';
import { AuthState, initialAuthState } from './auth.state';

export function reducer(state = initialAuthState, action: auth.Actions): AuthState {
  switch (action.type) {
    case auth.LOGIN: {
      return {
        ...state,
        loading: true
      }
    }

    case auth.LOGIN_SUCCESS: {

      return {
        ...state,
        loading: false,
      };
    }

     case auth.LOGIN_FAIL: {

      return {
        ...state,
        loading: false,
      };
    }
    case auth.LOGOUT: {
      return {
        ...state,
        loading: true
      }
    }
    case auth.LOGOUT_SUCCESS: {

      return {
        ...state,
        loading: false,
      };
    }
     case auth.LOGOUT_FAIL: {

      return {
        ...state,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
}
