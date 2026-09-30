/**
 * Resumo Passo a Passo: Criando o primeiro servidor com Express
 *
 * 1. Configuração Inicial: Você inicia o projeto rodando o comando npm init -y no terminal. 
 * Isso gera o arquivo package.json, que é o arquivo de configuração central do seu projeto.
 *
 * 2. Instalação: Você roda o comando npm install express. 
 * O Express é a ferramenta que simplifica a criação do servidor e dos endereços (rotas) da sua API.
 *
 * 3. Estruturação: Você cria a pasta src e, dentro dela, o arquivo principal do servidor, chamado server.js.
 *
 * 4. Construção: Dentro do código, você importa o Express, cria a aplicação e define as rotas. 
 * A rota é o caminho digitado no navegador (ex: /produtos). O método app.get() atende os acessos e o método res.json() define o que será devolvido na tela.
 *
 * 5. Execução: Você liga o servidor usando app.listen(3000).
 *  
 * Ao executar o arquivo no terminal (via node src/app.js ou pelo atalho npm run dev), o servidor passa a funcionar no seu próprio computador, acessível pelo endereço http://localhost:3000. 
 * 
 * Você pode testar os acessos no navegador ou usando ferramentas como o Postman (https://www.postman.com/) ou Insomnia (https://insomnia.rest/).
 */


// Passo 1: Importa a ferramenta Express para dentro do arquivo
const express = require("express");

// Passo 2: Inicializa o Express, criando o aplicativo/servidor
const app = express();

// Passo 3: Cria a rota inicial (representada pela barra "/")
// 'req' é o que o usuário enviou, 'res' é o que o servidor vai devolver
app.get("/", (req, res) => {
    res.json({ message: "API funcionando" }); // Devolve uma resposta no formato JSON
});

// Passo 4: Cria a rota específica para "/produtos"
app.get("/produtos", (req, res) => {
    res.json([ // Devolve uma lista de produtos
        {
            id: 1,
            nome: "Mouse Gamer",
            preco: 120
        },
        {
            id: 2,
            nome: "Teclado Mecânico",
            preco: 250
        }
    ]);
});

// Passo 5: Cria a rota específica para "/cursos"
app.get("/cursos", (req, res) => {
    res.json([ // Devolve uma lista de cursos
        {
            id: 1,
            nome: "Node.js",
            cargaHoraria: 40
        },
        {
            id: 2,
            nome: "React",
            cargaHoraria: 30
        },
        {
            id: 3,
            nome: "Python",
            cargaHoraria: 50
        }
    ]);
});

// Passo 6: Liga o servidor na porta 3000 para começar a escutar os acessos
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000"); // Mostra esta mensagem no terminal para confirmar
});