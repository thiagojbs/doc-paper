# Login integrado

É possível integrar o login entre plataformas, gerando um token via API e direcionando o usuário.

## Como integrar

1. Para integrar o login, você deve criar um token permanente em **Ajustes > Integração > Integração via API**.
2. Com esse token permanente, você deve enviar uma requisição com e-mail ou telefone do usuário que deseja autenticar via POST.
3. Passe o token permanente no cabeçalho da requisição usando `Auth Bearer` como tipo de autenticação.

::: warning Atenção
Nunca faça essa requisição no seu front-end, ela deve ser feita via backend para preservar a segurança dos seus dados.
:::

## Requisição

**POST:** `https://api.flw.chat/auth/v1/login/authenticate/external`

**Headers:**

```http
Authorization: Bearer pn_000x000x000x000x000x000x000x00
```

**Body (exemplo):**

```json
{
 "phoneNumber": "5531999999999",
 "email": "email@seudominio.com"
}
```

## Resposta (exemplo)

```json
{
 "userId": "99ad412d-0a0d-4c2f-aaee-a07b1",
 "accessToken": "eyJhbGciOiJIUz5IsInR5cCI6IkpXVCJ9",
 "expiresIn": "2023-01-01T09:48:10Z",
 "refreshToken": "rf_qUYCL67n7k3PuNorO9qA9g509Q7uQ",
 "tenantId": "7798b5de-0cc2-b456-47b454ee6e14",
 "urlRedirect": "https://xyz.flw.chat/auth/sign-in?transfer-login=true&defaultTenantId=7798b5de-0cc2-b456-47b454ee6e14&refresh-token=rf_qUYCL67n7k3PuNorO9qA9g509Q7uQ"
}
```

Com a resposta, você poderá usar o campo `urlRedirect` para direcionar seu usuário, assim ele iniciará a sessão já autenticado.
