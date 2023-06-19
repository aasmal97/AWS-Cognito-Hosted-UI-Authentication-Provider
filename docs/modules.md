[aws-cognito-hosted-ui-provider](README.md) / Exports

# aws-cognito-hosted-ui-provider

## Table of contents

### Classes

- [CognitoAuthentication](classes/CognitoAuthentication.md)

### Type Aliases

- [CognitioCredentials](modules.md#cognitiocredentials)
- [CognitioLoginProps](modules.md#cognitiologinprops)
- [CognitoAuthenticationProps](modules.md#cognitoauthenticationprops)
- [Either](modules.md#either)
- [Only](modules.md#only)

### Functions

- [changeurl](modules.md#changeurl)
- [delayAsyncFunc](modules.md#delayasyncfunc)
- [getFromLocalStorage](modules.md#getfromlocalstorage)
- [removeFromLocalStorage](modules.md#removefromlocalstorage)
- [setFromLocalStorage](modules.md#setfromlocalstorage)

## Type Aliases

### CognitioCredentials

Ƭ **CognitioCredentials**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `access_token` | `string` |
| `expires_in` | `number` |
| `id_token` | `string` |
| `refresh_token` | `string` |
| `token_type` | ``"Bearer"`` |

#### Defined in

[types/cognitoTypes.ts:1](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/types/cognitoTypes.ts#L1)

___

### CognitioLoginProps

Ƭ **CognitioLoginProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `client_id?` | `string` |
| `code_challenge?` | `string` |
| `code_challenge_method?` | ``"S256"`` \| ``"plain"`` |
| `redirect_uri?` | `string` |
| `response_type?` | ``"code"`` \| ``"token"`` |
| `scope?` | `string` |
| `state?` | `string` |

#### Defined in

[types/cognitoTypes.ts:8](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/types/cognitoTypes.ts#L8)

___

### CognitoAuthenticationProps

Ƭ **CognitoAuthenticationProps**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `clientId?` | `string` |
| `customHostedUIDomain?` | `string` |
| `loginCallbackUrl?` | `string` |
| `logoutCallbackUrl?` | `string` |
| `popUpWindow?` | `boolean` |
| `userPoolId?` | `string` |

#### Defined in

[types/cognitoTypes.ts:17](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/types/cognitoTypes.ts#L17)

___

### Either

Ƭ **Either**<`T`, `U`\>: [`Only`](modules.md#only)<`T`, `U`\> \| [`Only`](modules.md#only)<`U`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[types/generalTypes.ts:6](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/types/generalTypes.ts#L6)

___

### Only

Ƭ **Only**<`T`, `U`\>: { [P in keyof T]: T[P] } & { [P in keyof U]?: never }

#### Type parameters

| Name |
| :------ |
| `T` |
| `U` |

#### Defined in

[types/generalTypes.ts:1](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/types/generalTypes.ts#L1)

## Functions

### changeurl

▸ **changeurl**(`url`, `title`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |
| `title` | `string` |

#### Returns

`void`

#### Defined in

[helpers/changeUrl.ts:1](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/helpers/changeUrl.ts#L1)

___

### delayAsyncFunc

▸ **delayAsyncFunc**(`delay`, `promiseFunc`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `delay` | `number` |
| `promiseFunc` | () => `Promise`<`any`\> |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[helpers/delayAsyncFunc.ts:1](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/helpers/delayAsyncFunc.ts#L1)

___

### getFromLocalStorage

▸ **getFromLocalStorage**<`T`\>(`key`): ``null`` \| `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

``null`` \| `T`

#### Defined in

[helpers/localStorageFunc.ts:3](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/helpers/localStorageFunc.ts#L3)

___

### removeFromLocalStorage

▸ **removeFromLocalStorage**(`key`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Defined in

[helpers/localStorageFunc.ts:12](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/helpers/localStorageFunc.ts#L12)

___

### setFromLocalStorage

▸ **setFromLocalStorage**(`key`, `item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `item` | `any` |

#### Returns

`void`

#### Defined in

[helpers/localStorageFunc.ts:1](https://github.com/aasmal97/CognitioHostedUIAuthenticationProvider/blob/9b5a895/src/helpers/localStorageFunc.ts#L1)
