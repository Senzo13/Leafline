// Les différents types d'actions que vous pouvez dispatcher
export const authActionTypes = {
  RESTORE_TOKEN: "RESTORE_TOKEN",
  SIGN_IN: "SIGN_IN",
  SIGN_OUT: "SIGN_OUT",
};

// Le reducer pour gérer les actions
export const authReducer = (prevState, action) => {
  switch (action.type) {
    case actionTypes.RESTORE_TOKEN:
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case actionTypes.SIGN_IN:
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
      };
    case actionTypes.SIGN_OUT:
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
      };
  }
};
