import React, { createContext, useReducer } from "react";

// Les actions d'authentification et le reducer
import { authActionTypes } from "./authReducer";
import { authReducer } from "./authReducer";

// État initial
const initialState = {
  isLoading: true, // pour la vérification du statut de connexion
  isSignout: false, // pour gérer la déconnexion
  userToken: null, // le token de l'utilisateur
};

// Création du contexte
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Les méthodes d'authentification
  const authContext = {
    signIn: async (data) => {
      // ... code pour se connecter
      dispatch({ type: authActionTypes.SIGN_IN, token: "dummy-auth-token" });
    },
    signOut: () => dispatch({ type: authActionTypes.SIGN_OUT }),
    signUp: async (data) => {
      // ... code pour s'inscrire
      dispatch({ type: authActionTypes.SIGN_IN, token: "dummy-auth-token" });
    },
  };

  return (
    <AuthContext.Provider value={{ ...authContext, ...state }}>
      {children}
    </AuthContext.Provider>
  );
};
