[aws-cognito-hosted-ui-provider](../README.md) / [Exports](../modules.md) / CognitoAuthentication

# Class: CognitoAuthentication

## Table of contents

### Constructors

- [constructor](CognitoAuthentication.md#constructor)

### Properties

- [clientId](CognitoAuthentication.md#clientid)
- [code](CognitoAuthentication.md#code)
- [credentials](CognitoAuthentication.md#credentials)
- [customHostedUIDomain](CognitoAuthentication.md#customhosteduidomain)
- [isLoggingIn](CognitoAuthentication.md#isloggingin)
- [loginCallbackUrl](CognitoAuthentication.md#logincallbackurl)
- [logoutCallbackUrl](CognitoAuthentication.md#logoutcallbackurl)
- [popUpWindow](CognitoAuthentication.md#popupwindow)
- [userPoolId](CognitoAuthentication.md#userpoolid)

### Methods

- [handleCode](CognitoAuthentication.md#handlecode)
- [handlePopUpLogin](CognitoAuthentication.md#handlepopuplogin)
- [isAuthenticated](CognitoAuthentication.md#isauthenticated)
- [login](CognitoAuthentication.md#login)
- [logout](CognitoAuthentication.md#logout)
- [navigateToHostedUI](CognitoAuthentication.md#navigatetohostedui)
- [refreshAccessToken](CognitoAuthentication.md#refreshaccesstoken)
- [revokeCurrentTokens](CognitoAuthentication.md#revokecurrenttokens)
- [revokeSession](CognitoAuthentication.md#revokesession)
- [usedStoredCredentials](CognitoAuthentication.md#usedstoredcredentials)

## Constructors

### constructor

• **new CognitoAuthentication**(`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`CognitoAuthenticationProps`](../modules.md#cognitoauthenticationprops) |

#### Defined in

[CognitoAuthentication.ts:23](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/CognitoAuthentication.ts#L23)

## Properties

### clientId

• **clientId**: `string`

#### Defined in

[CognitoAuthentication.ts:15](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/CognitoAuthentication.ts#L15)

___

### code

• `Optional` **code**: `string`

#### Defined in

[CognitoAuthentication.ts:17](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/CognitoAuthentication.ts#L17)

___

### credentials

• `Optional` **credentials**: [`CognitioCredentials`](../modules.md#cognitiocredentials)

#### Defined in

[CognitoAuthentication.ts:18](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/CognitoAuthentication.ts#L18)

___

### customHostedUIDomain

• `Optional` **customHostedUIDomain**: `string`

#### Defined in

[CognitoAuthentication.ts:16](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/CognitoAuthentication.ts#L16)

___

### isLoggingIn

• `Private` `Optional` **isLoggingIn**: `boolean`

#### Defined in

[CognitoAuthentication.ts:22](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/CognitoAuthentication.ts#L22)

___

### loginCallbackUrl

• **loginCallbackUrl**: `string`

#### Defined in

[CognitoAuthentication.ts:19](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/CognitoAuthentication.ts#L19)

___

### logoutCallbackUrl

• `Optional` **logoutCallbackUrl**: `string`

#### Defined in

[CognitoAuthentication.ts:20](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/CognitoAuthentication.ts#L20)

___

### popUpWindow

• `Optional` **popUpWindow**: `boolean`

#### Defined in

[CognitoAuthentication.ts:21](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/CognitoAuthentication.ts#L21)

___

### userPoolId

• **userPoolId**: `string`

#### Defined in

[CognitoAuthentication.ts:14](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/CognitoAuthentication.ts#L14)

## Methods

### handleCode

▸ **handleCode**(`window`): `Promise`<``null`` \| [`CognitioCredentials`](../modules.md#cognitiocredentials)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `window` | `Window` |

#### Returns

`Promise`<``null`` \| [`CognitioCredentials`](../modules.md#cognitiocredentials)\>

#### Defined in

[CognitoAuthentication.ts:73](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/CognitoAuthentication.ts#L73)

___

### handlePopUpLogin

▸ **handlePopUpLogin**(`request`): `Promise`<``null`` \| [`CognitioCredentials`](../modules.md#cognitiocredentials)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | `string` |

#### Returns

`Promise`<``null`` \| [`CognitioCredentials`](../modules.md#cognitiocredentials)\>

#### Defined in

[CognitoAuthentication.ts:172](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/CognitoAuthentication.ts#L172)

___

### isAuthenticated

▸ **isAuthenticated**(): `boolean`

#### Returns

`boolean`

#### Defined in

[CognitoAuthentication.ts:239](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/CognitoAuthentication.ts#L239)

___

### login

▸ **login**(): `Promise`<`undefined` \| ``null`` \| [`CognitioCredentials`](../modules.md#cognitiocredentials)\>

#### Returns

`Promise`<`undefined` \| ``null`` \| [`CognitioCredentials`](../modules.md#cognitiocredentials)\>

#### Defined in

[CognitoAuthentication.ts:33](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/CognitoAuthentication.ts#L33)

___

### logout

▸ **logout**(`e?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `Omit`<[`CognitoAuthenticationProps`](../modules.md#cognitoauthenticationprops), ``"code_challenge"`` \| ``"code_challenge_method"``\> |

#### Returns

`Promise`<`void`\>

#### Defined in

[CognitoAuthentication.ts:45](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/CognitoAuthentication.ts#L45)

___

### navigateToHostedUI

▸ **navigateToHostedUI**(`e?`): `Promise`<``null`` \| [`CognitioCredentials`](../modules.md#cognitiocredentials)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | [`CognitoAuthenticationProps`](../modules.md#cognitoauthenticationprops) |

#### Returns

`Promise`<``null`` \| [`CognitioCredentials`](../modules.md#cognitiocredentials)\>

#### Defined in

[CognitoAuthentication.ts:154](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/CognitoAuthentication.ts#L154)

___

### refreshAccessToken

▸ **refreshAccessToken**(`credentials`): `Promise`<`undefined` \| ``null`` \| [`CognitioCredentials`](../modules.md#cognitiocredentials)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentials` | [`CognitioCredentials`](../modules.md#cognitiocredentials) |

#### Returns

`Promise`<`undefined` \| ``null`` \| [`CognitioCredentials`](../modules.md#cognitiocredentials)\>

#### Defined in

[CognitoAuthentication.ts:206](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/CognitoAuthentication.ts#L206)

___

### revokeCurrentTokens

▸ **revokeCurrentTokens**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

[CognitoAuthentication.ts:133](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/CognitoAuthentication.ts#L133)

___

### revokeSession

▸ **revokeSession**(`e?`): `Promise`<``null``\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `Omit`<[`CognitoAuthenticationProps`](../modules.md#cognitoauthenticationprops), ``"code_challenge"`` \| ``"code_challenge_method"``\> |

#### Returns

`Promise`<``null``\>

#### Defined in

[CognitoAuthentication.ts:109](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/CognitoAuthentication.ts#L109)

___

### usedStoredCredentials

▸ **usedStoredCredentials**(`preventAutoNavigation?`): `Promise`<`undefined` \| ``null`` \| [`CognitioCredentials`](../modules.md#cognitiocredentials)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `preventAutoNavigation?` | `boolean` |

#### Returns

`Promise`<`undefined` \| ``null`` \| [`CognitioCredentials`](../modules.md#cognitiocredentials)\>

#### Defined in

[CognitoAuthentication.ts:59](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/CognitoAuthentication.ts#L59)
