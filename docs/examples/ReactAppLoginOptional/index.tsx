import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { Authentication } from "./Authentication";
import { CognitoAuthentication } from "aws-cognito-hosted-ui-provider";
const cmsAppAuthUserDomain = process.env.REACT_APP_CMS_AUTH_DOMAIN;
const userPoolId = process.env.REACT_APP_AWS_USER_POOL_ID;
const clientId = process.env.REACT_APP_AWS_USER_POOL_CLIENT_ID;
const cognitoClient = new CognitoAuthentication({
  userPoolId: userPoolId,
  clientId,
  customHostedUIDomain: cmsAppAuthUserDomain,
});
const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<></>}></Route>)
);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Authentication cognitoClient={cognitoClient}>
      <RouterProvider router={router} />
    </Authentication>
  </React.StrictMode>
);
