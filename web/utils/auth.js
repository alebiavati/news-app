import React, { useState, useEffect, useContext } from "react";

const keycloakConfig = {
  url: "http://localhost:8090/auth/",
  realm: "news-app",
  clientId: "news-app",
};

let keycloak = null;

const getKeycloakSession = () => {
  if (typeof Keycloak === "undefined") {
    return false;
  }

  if (keycloak) {
    return keycloak.idTokenParsed || false;
  }

  keycloak = new Keycloak(keycloakConfig);

  return keycloak
    .init({
      onLoad: "check-sso",
      silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
    })
    .then((authenticated) => {
      if (authenticated) {
        return keycloak.idTokenParsed || false;
      } else {
        return false;
      }
    })
    .catch(() => {
      return false;
    });
};

const AuthContext = React.createContext([false, true]);

export const Provider = ({ children }) => {
  const [session, setSession] = useState(null);

  useEffect(async () => {
    const session = await getKeycloakSession();
    setSession(session);
  });

  return (
    <AuthContext.Provider value={[session, session === null]}>
      {children}
    </AuthContext.Provider>
  );
};

export const useSession = () => useContext(AuthContext);

export const signIn = () => {
  if (keycloak) {
    keycloak.login();
  }
};

export const signOut = () => {
  if (keycloak) {
    keycloak.logout();
  }
};

export const getSession = () => keycloak.idToken || false;
