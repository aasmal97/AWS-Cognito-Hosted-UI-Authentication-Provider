export type CognitioCredentials = {
  access_token: string;
  id_token: string;
  refresh_token: string;
  token_type: "Bearer";
  expires_in: number;
};
export type CognitioLoginProps = {
  client_id?: string;
  redirect_uri?: string;
  response_type?: "code" | "token";
  state?: string;
  scope?: string;
  code_challenge_method?: "S256" | "plain";
  code_challenge?: string;
};
export type CognitoAuthenticationProps = {
  popUpWindow?: boolean;
  userPoolId?: string;
  clientId?: string;
  customHostedUIDomain?: string;
  loginCallbackUrl?: string;
  logoutCallbackUrl?: string;
};
