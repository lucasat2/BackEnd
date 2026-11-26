## Postman — Configuração automática do token JWT

O Postman pode solicitar o desbloqueio do Vault (cofre de credenciais) ao salvar uma requisição com um token JWT inserido diretamente no campo de autenticação.

Para testes locais com credenciais fictícias, é possível selecionar **Store in plain text**. Entretanto, a configuração recomendada para estudos é utilizar uma variável na Collection e atualizar o token automaticamente após o login.

### 1. Criar as variáveis da Collection

Clique na Collection `api-produtos` e acesse a aba **Variables**.

| Variável | Valor |
| --- | --- |
| `base_url` | `http://localhost:3000` |
| `token` | Deixe vazio |

Salve com `Ctrl + S`.

### 2. Automatizar o armazenamento do token

Abra a requisição `POST /login` e acesse **Scripts → Post-response**.

Adicione o código abaixo:

```javascript
if (pm.response.code === 200) {
    const resposta = pm.response.json();

    pm.collectionVariables.set("token", resposta.token);
}
```

**O que esse código faz?**

- Verifica se o login retornou o status HTTP `200`.
- Converte a resposta da API em um objeto JavaScript.
- Armazena o JWT recebido na variável `token` da Collection.
- Atualiza o token automaticamente a cada login bem-sucedido.

> O código considera que a API retorna o JWT na propriedade `token` do JSON.

Salve a requisição com `Ctrl + S`.

### 3. Configurar a autenticação da Collection

1. Clique na Collection `api-produtos`.
2. Acesse a aba **Authorization**.
3. Em **Auth Type**, selecione **Bearer Token**.
4. No campo **Token**, informe apenas:

```text
{{token}}
```

5. Salve a Collection com `Ctrl + S`.

> Não coloque a palavra `Bearer` antes da variável. O Postman adiciona esse prefixo automaticamente ao cabeçalho da requisição.

### 4. Configurar a autenticação das rotas

Abra a aba **Authorization** de cada requisição e configure conforme a tabela:

| Método | Rota | Authorization |
| --- | --- | --- |
| POST | `/usuarios` | No Auth |
| POST | `/login` | No Auth |
| GET | `/perfil` | Inherit auth from parent |
| GET | `/produtos` | No Auth (se pública) |
| POST | `/produtos` | Inherit auth from parent |
| PUT | `/produtos/:id` | Inherit auth from parent |
| DELETE | `/produtos/:id` | Inherit auth from parent |
| POST | `/pedidos` | Inherit auth from parent |
| GET | `/meus-pedidos` | Inherit auth from parent |
| GET | `/pedidos/:id` | Inherit auth from parent |
| PATCH | `/pedidos/:id/status` | Inherit auth from parent |

**Inherit auth from parent** significa que a requisição utiliza a autenticação configurada na Collection.

### 5. Testar o funcionamento

1. Execute a requisição `POST /login` com um usuário cadastrado.
2. Verifique se o login retornou o status `200 OK` e um token.
3. Abra `GET {{base_url}}/perfil`.
4. Clique em **Send**.
5. Se o token estiver válido, a API deverá retornar os dados do usuário autenticado.

O Postman enviará automaticamente o seguinte cabeçalho HTTP:

```http
Authorization: Bearer <token JWT>
```

### 6. Fluxo de autenticação

```text
POST /login
    ↓
API retorna o JWT
    ↓
Script salva o JWT na variável token
    ↓
Collection utiliza {{token}}
    ↓
Rotas protegidas recebem o JWT automaticamente
```

### 7. Possíveis erros

| Erro | O que verificar |
| --- | --- |
| 401 — Token não enviado | Confira se o login foi executado, se a variável está preenchida e se a rota herda a autenticação. |
| 401 — Token inválido ou expirado | Execute o login novamente e confira o token recebido. |
| 403 — Acesso negado | Confira se o usuário possui a permissão exigida pela rota, como administrador. |
| Unlock your vault | Evite inserir o JWT diretamente na requisição; utilize a variável `{{token}}`. |

### 8. Vantagens dessa configuração

- Não é necessário copiar e colar o token manualmente.
- A autenticação fica centralizada na Collection.
- Quando o token expirar, basta realizar o login novamente.
- Facilita os testes de rotas protegidas e o uso do Postman em sala de aula.

**Atenção:** mantenha o valor do token apenas localmente, não o compartilhe nem o inclua em arquivos exportados. Antes de distribuir a Collection aos alunos, confira se o arquivo exportado não contém tokens, senhas ou outras credenciais. Cada aluno deve realizar seu próprio login.
