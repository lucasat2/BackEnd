# API Store Node.js

API REST de loja online desenvolvida com Node.js, Express, MongoDB e JWT.

## 🚀 Tecnologias usadas

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- Bcrypt
- Zod
- Dotenv
- Postman

## 📌 Funcionalidades

- Cadastro de usuários
- Login com JWT
- Autenticação de rotas
- Permissão de admin
- CRUD de produtos
- Filtros e paginação de produtos
- Criação de pedidos
- Listagem de pedidos do usuário logado
- Atualização de status do pedido por admin
- Validação de dados com Zod

## 🧱 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone LINK_DO_REPOSITORIO
```

### 2. Entre na pasta

```bash
cd api-store-nodejs
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Crie o arquivo `.env`

Use o arquivo `.env.example` como base:

```
PORT=3000
MONGO_URL=sua_string_do_mongodb
JWT_SECRET=sua_chave_secreta
```

### 5. Rode o projeto

```bash
npm run dev
```

## 🔐 Rotas de autenticação

### Cadastro

```
POST /usuarios
```

Body:

```json
{
  "nome": "Ana",
  "email": "ana@email.com",
  "senha": "123456"
}
```

### Login

```
POST /login
```

Body:

```json
{
  "email": "ana@email.com",
  "senha": "123456"
}
```

## 📦 Rotas de produtos

```
GET /produtos
GET /produtos/:id
POST /produtos
PUT /produtos/:id
DELETE /produtos/:id
```

Rotas de criação, atualização e remoção exigem token de admin.

## 🛒 Rotas de pedidos

```
POST /pedidos
GET /meus-pedidos
GET /pedidos/:id
PATCH /pedidos/:id/status
```

## 🔑 Autenticação

Para acessar rotas protegidas, envie o token no header:

```
Authorization: Bearer SEU_TOKEN
```

## 🌐 Deploy

Link da API online:

```
COLOQUE_AQUI_O_LINK_DO_DEPLOY
```

## 👨‍💻 Autor

Desenvolvido como projeto de estudo para prática de backend com Node.js.

