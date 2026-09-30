/**
 * Resumo Passo a Passo: Rotas e Métodos HTTP
 *
 * 1. O que são rotas e Métodos HTTP: 
 * Rotas são os endereços da sua API (ex: /produtos). Os métodos HTTP indicam a ação desejada:
 * GET (buscar), POST (criar), PUT (atualizar tudo), PATCH (atualizar parte) e DELETE (remover).
 *
 * 2. Configuração Base: 
 * Você cria o servidor com Express e adiciona a linha `app.use(express.json());`. 
 * Essa linha é essencial para a API entender dados enviados no formato JSON (como formulários).
 *
 * 3. Base de Dados Simulada: 
 * Você cria um array (lista) chamado `produtos` com alguns objetos dentro. 
 * Ele funcionará como um banco de dados temporário para testarmos as rotas.
 *
 * 4. GET (Buscar Tudo ou Específico): 
 * O método `app.get("/produtos")` retorna toda a lista. 
 * O método `app.get("/produtos/:id")` usa `req.params.id` para pegar o ID da URL e devolver apenas o produto correspondente.
 * O `app.get("/buscar-produtos")` usa `req.query` para filtrar produtos usando parâmetros na URL (ex: ?categoria=Móveis).
 *
 * 5. POST (Criar): 
 * O método `app.post("/produtos")` recebe novos dados através do `req.body` (o corpo da requisição).
 * Ele valida se os campos foram preenchidos e adiciona o novo produto ao array usando `.push()`.
 *
 * 6. PUT e PATCH (Atualizar): 
 * O `app.put("/produtos/:id")` busca um produto pelo ID (`req.params`) e substitui todas as suas informações pelos dados recebidos no `req.body`.
 * O `app.patch("/produtos/:id/preco")` atualiza apenas um campo específico (neste caso, o preço).
 *
 * 7. DELETE (Remover): 
 * O `app.delete("/produtos/:id")` localiza a posição (index) do produto no array pelo ID.
 * Se encontrar, usa o `.splice()` para remover o item da lista.
 *
 * 8. Status Codes (Códigos de Resposta): 
 * Você utiliza códigos para informar o resultado da operação: 
 * 200 (OK/Sucesso), 201 (Criado), 400 (Erro nos dados enviados), 404 (Não encontrado) e 500 (Erro no servidor).
 * 
 * 
 * # Resumo da aula 📌

Nesta aula, você aprendeu:

✅ `GET` busca dados

✅ `POST` cria dados

✅ `PUT` atualiza dados

✅ `PATCH` atualiza parte dos dados

✅ `DELETE` remove dados

✅ `req.params` pega dados da URL

✅ `req.query` pega filtros da URL

✅ `req.body` pega dados enviados no corpo da requisição

✅ status codes ajudam a comunicar o resultado da API
 */

const express = require("express");

// Inicializa a aplicação
const app = express();

// Permite que a API receba e entenda dados no formato JSON
app.use(express.json());

// Banco de dados temporário simulado em uma lista (array)
const produtos = [
    { id: 1, nome: "Mouse Gamer", preco: 120, categoria: "Informática" },
    { id: 2, nome: "Teclado Mecânico", preco: 250, categoria: "Informática" },
    { id: 3, nome: "Cadeira Gamer", preco: 900, categoria: "Móveis" }
];

// Método GET: Busca e lista todos os produtos
app.get("/produtos", (req, res) => {
    // Retorna a lista completa de produtos para quem fez a requisição
    res.json(produtos);
});

// Método GET (com params): Busca um único produto usando o ID passado na URL
app.get("/produtos/:id", (req, res) => {
    const id = Number(req.params.id); // Pega o ID da URL e transforma em número

    // Procura na lista um produto que tenha o mesmo ID
    const produto = produtos.find((item) => item.id === id);

    // Se não achar o produto, retorna o código de erro 404 (Não encontrado)
    if (!produto) {
        // O 'return' encerra a execução aqui, impedindo que o código continue
        return res.status(404).json({ erro: "Produto não encontrado." });
    }

    // Se achou, devolve apenas o produto encontrado
    res.json(produto);
});

// Método GET (com query): Filtra produtos por categoria usando a URL (ex: ?categoria=Móveis)
app.get("/buscar-produtos", (req, res) => {
    // Desestruturação {}: Puxa a variável 'categoria' de dentro do req.query
    // É o mesmo que fazer: const categoria = req.query.categoria;
    const { categoria } = req.query;

    // Se o usuário não enviou uma categoria na URL, devolve todos os produtos
    if (!categoria) {
        return res.json(produtos);
    }

    // Filtra a lista mantendo apenas os produtos que têm a mesma categoria solicitada
    const produtosFiltrados = produtos.filter(
        (produto) => produto.categoria === categoria
    );

    // Devolve apenas os produtos que passaram no filtro
    res.json(produtosFiltrados);

    // http://localhost:3000/buscar-produtos?categoria=Móveis
});

// Método POST: Cria e adiciona um novo produto na lista
app.post("/produtos", (req, res) => {
    // Desestruturação {}: Extrai nome, preco e categoria de dentro do corpo da requisição (req.body)
    const { nome, preco, categoria } = req.body;

    // Validação: se faltar algum dado, retorna código 400 (Erro do cliente)
    if (!nome || !preco || !categoria) {
        return res.status(400).json({
            erro: "Nome, preço e categoria são obrigatórios."
        });
    }

    // Monta a estrutura do novo produto
    const novoProduto = {
        id: produtos.length + 1, // Cria um ID automático baseado no tamanho da lista
        nome,
        preco,
        categoria
    };

    // Adiciona o novo produto na lista original
    produtos.push(novoProduto);

    // Retorna o código 201 (Criado com sucesso) junto com o produto que acabou de ser criado
    res.status(201).json(novoProduto);
});

// Método PUT: Atualiza todas as informações de um produto existente
app.put("/produtos/:id", (req, res) => {
    // Pega o ID da URL e transforma em número
    const id = Number(req.params.id);

    // Desestruturação {}: Puxa os novos dados que o usuário enviou para atualizar
    const { nome, preco, categoria } = req.body;

    // Busca o produto correspondente na lista
    const produto = produtos.find((item) => item.id === id);

    // Verifica se o produto realmente existe antes de tentar alterá-lo
    if (!produto) {
        return res.status(404).json({ erro: "Produto não encontrado." });
    }

    // Substitui os dados antigos pelos novos que chegaram no req.body
    produto.nome = nome;
    produto.preco = preco;
    produto.categoria = categoria;

    // Devolve o produto já atualizado
    res.json(produto);
});

// Método PATCH: Atualiza apenas uma informação específica (neste caso, só o preço)
app.patch("/produtos/:id/preco", (req, res) => {
    // Pega o ID da URL e transforma em número
    const id = Number(req.params.id);

    // Desestruturação {}: Extrai apenas o 'preco' do corpo da requisição
    const { preco } = req.body;

    // Busca o produto correspondente na lista
    const produto = produtos.find((item) => item.id === id);

    // Verifica se o produto existe
    if (!produto) {
        return res.status(404).json({ erro: "Produto não encontrado." });
    }

    // Verifica se o novo preço foi realmente enviado
    if (!preco) {
        return res.status(400).json({ erro: "Preço é obrigatório." });
    }

    // Atualiza estritamente o valor do preço, deixando o resto intacto
    produto.preco = preco;

    // Devolve o produto com o preço novo
    res.json(produto);
});

// Método DELETE: Remove um produto da lista
app.delete("/produtos/:id", (req, res) => {
    // Pega o ID da URL e transforma em número
    const id = Number(req.params.id);

    // Descobre em qual posição (índice 0, 1, 2...) da lista o produto está
    const index = produtos.findIndex((item) => item.id === id);

    // O findIndex retorna -1 se não encontrar o item na lista
    if (index === -1) {
        return res.status(404).json({ erro: "Produto não encontrado." });
    }

    // Remove 1 elemento da lista a partir da posição (index) encontrada
    produtos.splice(index, 1);

    // Retorna uma mensagem confirmando a exclusão
    res.json({ mensagem: "Produto deletado com sucesso." });
});

// Inicia o servidor para escutar requisições na porta 3000
app.listen(3000, () => {
    // Exibe a mensagem no console apenas para o desenvolvedor saber que ligou
    console.log("Servidor rodando na porta 3000");
});