var http = require('http')
var dayjs = require('dayjs')
var locaLizedFormat = require('dayjs/plugin/localizedFormat')
dayjs.extend(locaLizedFormat)

// Funcao que sera passada para o servidor

function serverCallback(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' }); // Escreva no cabecalho um conteudo do tipo texto
    res.end("Hello " + process.argv[2] + " Hoje é dia " + dayjs().format('LLLL'));  // O conteudo será um Hello + a segunda posicao, que é alguma coisa que eu escrever ex: node hello.js Lucas
}

// Cria um servidor para ouvir na porta 8080
http.createServer(serverCallback).listen(8080);
