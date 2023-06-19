import React from "react";
import { createContext, useState, useEffect, useContext } from "react";
import {
  CognitoAuthentication,
  CognitioCredentials,
} from "aws-cognito-hosted-ui-provider";
type CredentialsContextType = {
  credentials: CognitioCredentials | null | undefined;
  logout: () => Promise<void>;
  login: () => Promise<CognitioCredentials | undefined>;
  refreshAccessToken: () => Promise<CognitioCredentials | undefined>;
};
export const CredentialsContext = createContext<CredentialsContextType | null>(
  null
);
export const useAuthProvider = () => useContext(CredentialsContext);
export const Authentication = ({
  children,
  cognitoClient,
}: {
  children: JSX.Element | JSX.Element[] | string;
  cognitoClient: CognitoAuthentication;
}) => {
  const [credentials, setCredentials] = useState<
    null | CognitioCredentials | undefined
  >(null);
  //ensure that when creds change, so does the state
  useEffect(() => {
    if (cognitoClient) setCredentials(cognitoClient.credentials);
  }, [cognitoClient.credentials]);
  const login = async () => {
    const result = await cognitoClient.login();
    if (!result) return;
    setCredentials(result);
    return result;
  };
  const logout = () => cognitoClient.logout();
  const refreshAccessToken = async () => {
    if (!credentials) return;
    const result = await cognitoClient.refreshAccessToken(credentials);
    if (!result) return;
    setCredentials(result);
    return result;
  };
  return (
    <CredentialsContext.Provider
      value={{ credentials, logout, refreshAccessToken, login }}
    >
      {children}
    </CredentialsContext.Provider>
  );
};
