# AWS-Cognito-Hosted-UI-Authentication-Provider
A library that wraps api calls to aws-cognito's hosted ui auth server, and manages tokens on the client-side.

![NPM Downloads](https://img.shields.io/npm/v/aws-cognito-hosted-ui-provider)

## What does it do?
This library handles oauth 2 authentication by refreshing access tokens, storing credentials locally, revoking sessions and tokens, and auto-navigating to the  hosted ui for a new authorization code, when access tokens have expired. Can be used for both SSR (Sever-side rendered) and CSR (Client-side rendered) apps, although CSR apps may require extra-setup.

## Installation
```
npm install aws-cognito-hosted-ui-provider
```
## Minimal Setup
```
const appAuthUserDomain = process.env.REACT_APP_AUTH_DOMAIN;
const userPoolId = process.env.REACT_APP_AWS_USER_POOL_ID;
const clientId = process.env.REACT_APP_AWS_USER_POOL_CLIENT_ID;
const cognitoClient = new CognitoAuthentication({
  userPoolId: userPoolId,
  clientId: clientId,
  customHostedUIDomain: appAuthUserDomain,
});
```
`userPoolId`: The id of your coginto user pool
`clientId`: The id of your cognito user pool web client.
`customHostedUIDomain`: The domain of your hosted ui server

If you want, you can also set a `loginCallbackUrl` and a `logoutCallbackUrl`, but if they aren't set, they will be set to the original page's [origin](https://developer.mozilla.org/en-US/docs/Web/API/Location/origin).
You must ensure that these values are also accepted callback URLs and sign-out URLs, in your [aws cognitio user pool client app](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-app-integration.html?icmpid=docs_cognito_console_help_panel). 

## Options
This library allows for either a pop-up auth flow, or an in tab auth flow. 

#### In-Tab Auth Flow
This is the default auth flow, when `popUpWindow = false | undefined`

This is the preferred method for **server-side rendered apps**, as it does not lead the user away from the current tab or window. Here, the user is redirected to the hosted ui server page, and asked to login. After logging in, the authorization code is sent back in the callback url's parameters, and is automatically retrieved and deleted from the url, by this library. This library then handles the rest of the outh2 flow process, including the validation of the code, and verification of tokens. 

#### Pop-up Auth Flow
This is the auth flow, when `popUpWindow = true`

This is the preferred method for **client-side-rendered apps**, as it does not navigate away from the current tab or window, and therefore, any data or state on the current page can be maintained. Here, a pop-up window to the hosted ui is generated, and the user is asked to login. After logging in, the pop-window is redirected to the callback url, **WHICH MUST HAVE THE SAME ORIGIN** as the original page. The authorization code is then read from the pop-up window's url, and the library on the original page, handles the rest. The pop-up window is automatically closed after the code is read. 

To prevent a collision, where the callback url page and the original page are exchanging a code at the same time, there is a 500ms delay before exchanging a code for credentials. This ensures the original page will always be able to exchange the code first, and store the credentials. 

## Exposed Methods
- [login](CognitoAuthentication.md#login): Handles the entire oauth 2 login process. Meant to be used on a login button, or upon initial page load. Underneath, it uses the `refreshAccessToken`, `handlePopUpLogin`, `handleCode`, `usedStoredCredentials`, and `navigateToHostedUI` methods.

- [logout](CognitoAuthentication.md#logout): Handles the entire logout process. Meant to be used on a logout button. Underneath, it uses the `revokeCurrentTokens`, and `revokeUserSession` methods

- [refreshAccessToken](CognitoAuthentication.md#refreshaccesstoken): Uses the current refresh token to refresh your access tokens. If refresh tokens are invalid, it will navigate back to the hosted ui

- [isAuthenticated](CognitoAuthentication.md#isauthenticated): Verifies if user is logged in by validating whether there are active credentials being stored

- [revokeCurrentTokens](CognitoAuthentication.md#revokecurrenttokens): Revokes refresh token and all associated access tokens. Individual [access tokens cannot be revoked](https://repost.aws/questions/QU_k2wyQFMQPO3LhWaYZ4QCQ/how-can-i-revoke-tokens-created-through-cognito-oauth-token-url) according to AWS, however, they are short-lived and expire.

- [revokeSession](CognitoAuthentication.md#revokesession): Revokes the current user session

- [usedStoredCredentials](CognitoAuthentication.md#usedstoredcredentials): Fetches recently used credentials from local storage. This is how we maintain state even a user closes the tab or browser, and hasn't logged out.

- [handleCode](CognitoAuthentication.md#handlecode): Handles the exchange of an authorization code in the url parameters, for client credentials

- [handlePopUpLogin](CognitoAuthentication.md#handlepopuplogin): Handles logging in through a pop-up window

- [navigateToHostedUI](CognitoAuthentication.md#navigatetohostedui): Navigates to the hosted ui page. 


## Further Documentation

For in-depth documentation about the various options, refer to our [docs](./docs/README.md)
