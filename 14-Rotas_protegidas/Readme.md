Aula 14 — Rotas Protegidas e Permissão de Usuário 🔐
Nesta aula, damos continuidade à API de usuários e produtos desenvolvida com Node.js e Express, utilizando o token JWT gerado no login para proteger rotas e controlar permissões.

O projeto utiliza middlewares de autenticação e autorização para liberar o acesso ao perfil de usuários autenticados e permitir que apenas administradores criem, atualizem e excluam produtos. As consultas de produtos continuam públicas.
📌 Funcionalidades
- ✅ Validação do token JWT enviado no header Authorization.
- ✅ Verificação do formato Bearer TOKEN.
- ✅ Bloqueio de requisições sem token, com token inválido ou expirado.
- ✅ Disponibilização dos dados do token validado em req.user.
- ✅ Rota GET /perfil acessível com token válido.
- ✅ Listagem e consulta de produtos sem necessidade de autenticação.
- ✅ Criação, atualização e exclusão de produtos restritas ao usuário do tipo admin.
- ✅ Respostas 401 para falhas de autenticação e 403 para falta de permissão.
Acesso às rotas
Método	Rota	Acesso
POST	/usuarios	Público — cadastro
POST	/login	Público — autenticação
GET	/produtos	Público
GET	/produtos/:id	Público
GET	/perfil	Usuário autenticado
POST	/produtos	Administrador autenticado
PUT	/produtos/:id	Administrador autenticado
DELETE	/produtos/:id	Administrador autenticado


📚 Aprendizados
- ✅ Diferença entre rotas públicas e protegidas.
- ✅ Diferença entre autenticação e autorização.
- ✅ Envio de tokens pelo header Authorization: Bearer TOKEN.
- ✅ Criação e reutilização de middlewares no Express.
- ✅ Validação de JWT com jwt.verify() e JWT_SECRET.
- ✅ Uso de req.user para acessar os dados do usuário autenticado.
- ✅ Uso de next() para continuar o processamento da requisição.
- ✅ Significado dos campos iat (criação) e exp (expiração) do token.
- ✅ Controle de acesso com os tipos cliente e admin.
- ✅ Diferença entre os status 401 Unauthorized e 403 Forbidden.
- ✅ Ordem de execução: authMiddleware → adminMiddleware → controller.
- ✅ Testes de autenticação e permissão no Postman.
📚 Dever de Casa
👤 Exercício 1 — Criar rota protegida de perfil
Crie a rota GET /perfil com as seguintes regras:
- Exigir token de autenticação.
- Retornar 401 se o token não for enviado.
- Retornar os dados do usuário logado quando o token for válido.
Resposta esperada no exercício:
{
  "mensagem": "Perfil acessado com sucesso.",
  "usuario": {
    "id": "id_do_usuario",
    "nome": "Ana",
    "email": "ana@email.com",
    "tipo": "cliente"
  }
}
O retorno de req.user também pode conter os campos iat e exp, conforme o token gerado no login.
📦 Exercício 2 — Proteger rotas de produtos
Aplique a autenticação às rotas POST /produtos, PUT /produtos/:id e DELETE /produtos/:id.
- Sem token, retornar 401.
- Com token inválido, retornar 401.
- Com token válido, permitir seguir para a próxima etapa.
👑 Exercício 3 — Criar permissão de admin
Crie um middleware de administrador com as seguintes regras:
- Se o usuário não estiver logado, retornar 401.
- Se estiver logado, mas não for administrador, retornar 403.
- Se for administrador, permitir criar, atualizar e excluir produtos.
Teste com um usuário do tipo cliente e outro do tipo admin. Aplique esse middleware depois do middleware de autenticação.
🛠️ Tecnologias Utilizadas
- JavaScript → Linguagem utilizada no backend.
- Node.js → Ambiente de execução da API.
- Express → Definição de rotas, middlewares e respostas HTTP.
- jsonwebtoken (JWT) → Verificação dos tokens e dos dados de autenticação.
- dotenv → Carregamento das variáveis de ambiente do arquivo .env.
- bcrypt → Comparação de senhas no login desenvolvido na aula anterior.
- Postman → Testes das requisições, tokens e permissões.
📂 Estrutura do Projeto
Arquivos apresentados ou referenciados na aula; esta é uma visão parcial do projeto desenvolvido ao longo do curso:
src/
├── config/
│   └── database.js              # Conexão com o banco de dados
├── controllers/
│   ├── productController.js     # Operações de produtos
│   └── userController.js        # Cadastro de usuários
├── middlewares/
│   ├── authMiddleware.js        # Validação do token JWT
│   ├── adminMiddleware.js       # Verificação da permissão de admin
│   ├── loggerMiddleware.js      # Registro das requisições
│   └── errorMiddleware.js       # Tratamento de erros
├── routes/
│   ├── authRoutes.js            # Rotas de autenticação
│   ├── productRoutes.js         # Rotas públicas e restritas de produtos
│   ├── profileRoutes.js         # Perfil do usuário autenticado
│   └── userRoutes.js            # Rotas de usuários
└── server.js                   # Inicialização da aplicação
A aula também utiliza um arquivo .env para as configurações de ambiente.
🚀 Como Executar o Projeto
1. 📁 Prepare o projeto das aulas anteriores
Abra o projeto completo da API, com Node.js disponível e as dependências das aulas anteriores instaladas. Esta aula depende do cadastro, do login com JWT, dos controllers e da conexão com o banco já implementados.

O material não inclui o package.json nem os scripts de instalação. Use o gerenciador e as dependências definidos no projeto original.
2. ⚙️ Configure o ambiente
No .env do projeto, mantenha o JWT_SECRET usado para gerar os tokens no login. Exemplo de configuração, com valor a substituir:
JWT_SECRET=SUBSTITUA_POR_UM_SEGREDO_LOCAL
PORT=3000
Mantenha também as configurações exigidas por src/config/database.js e disponibilize o banco utilizado nas aulas anteriores. Os detalhes dessa conexão não são apresentados nesta aula.
3. ▶️ Inicie a API
Na raiz do projeto, execute o arquivo de entrada apresentado na aula:
node src/server.js
O servidor utiliza a porta definida em PORT ou, por padrão, a porta 3000. Os exemplos abaixo consideram http://localhost:3000.
4. 🎫 Faça login e copie o token
No Postman, envie POST http://localhost:3000/login, com Body no formato JSON e as credenciais de um usuário já cadastrado:
{
  "email": "EMAIL_DO_USUARIO_CADASTRADO",
  "senha": "SENHA_DO_USUARIO_CADASTRADO"
}
Copie o campo token retornado pela API.
5. 👤 Acesse o perfil
Envie GET http://localhost:3000/perfil e adicione o header:
Authorization: Bearer SEU_TOKEN_AQUI
Com token válido, a API retorna a mensagem de sucesso e os dados do token. Sem token, retorna 401 com a mensagem Token não enviado..
6. 👑 Teste as permissões de produtos
Faça login com um usuário do tipo cliente e tente enviar POST http://localhost:3000/produtos, usando seu token e o seguinte Body JSON:
{
  "nome": "Headset Gamer",
  "preco": 180,
  "categoria": "Informática",
  "estoque": 8
}
O resultado esperado é 403. Repita com o token de um usuário do tipo admin: a requisição deve seguir para o controller de criação.

Para preparar o administrador de teste, utilize o exercício da Aula 12 ou o ajuste de cadastro apresentado nesta aula, que aceita tipo, usa cliente como padrão e valida os valores cliente e admin. Esse ajuste é destinado ao ambiente didático: a atribuição de privilégios administrativos precisa ser controlada em uma aplicação real.

Confira também os seguintes cenários:
Cenário	Resultado esperado
Consultar produtos sem token	Acesso público
Acessar o perfil sem token	401
Acessar rota protegida com token inválido ou expirado	401
Acessar o perfil com token válido	Retorno dos dados do usuário
Criar, atualizar ou excluir produto com token de cliente	403
Criar, atualizar ou excluir produto com token de admin	Encaminhamento ao controller


Para testar atualização e exclusão, substitua :id pelo identificador de um produto existente.
