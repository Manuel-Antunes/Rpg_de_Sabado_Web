import { Reducer } from "redux";
import { AuthState, AuthTypes } from "./types";

const INITIAL_STATE: AuthState = {
  data: { signed: false, token: null },
  error: false,
  loading: false,
};

const reducer: Reducer<AuthState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthTypes.SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case AuthTypes.SIGN_FAILURE:
      return { ...state, loading: false, error: true };
    case AuthTypes.SIGN_OUT:
      return { ...state, data: { signed: false, token: null } };
    case AuthTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        data: { signed: true, token: "123" },
      };
    default:
      return state;
  }
};

export default reducer;
