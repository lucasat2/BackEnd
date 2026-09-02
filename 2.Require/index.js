// Passo 1: Importação de módulos necessários
var http = require('http'); // Responsável por criar o servidor web local.
var request = require('request'); // Responsável por fazer a requisição à API externa.
var fs = require('fs'); // Lê arquivos físicos do computador (File System).

// Passo 2: Criação das variáveis globais
var request_body = undefined; // Guardará os dados da API após o carregamento.
var html_content = undefined; // Guardará o texto do arquivo index.html após a leitura.

// Passo 3: Função para gerar a tabela e inserir no HTML
function createHtmlStringFromJSON(retrievedData) {
    // Localiza exatamente onde a tag de abertura e fechamento do corpo da página estão
    var body_begin_index = html_content.indexOf('<body>');
    var body_end_index = html_content.indexOf('</body>');

    // Recorta o HTML original em duas metades: tudo antes do final da tag <body> (+6 caracteres) e tudo a partir do </body>
    var string_until_body = html_content.slice(0, body_begin_index + 6);
    var string_from_body = html_content.slice(body_end_index);

    // Inicia a montagem do código HTML da tabela
    var html_string = '<table>\n';
    html_string += '<tr>\n';

    // Cria o cabeçalho pegando o nome das colunas do primeiro item dos dados
    for (var attribute in retrievedData[0]) {
        if (typeof retrievedData[0][attribute] !== 'object') { // Ignora dados complexos/aninhados
            html_string += "<td>" + attribute + "</td>\n";
        }
    }
    html_string += "</tr>\n";

    // Percorre cada item (objeto) retornado pela API para criar as linhas com os valores
    retrievedData.forEach(function (object) {
        html_string += '<tr>\n';
        for (var attribute in object) {
            if (typeof object[attribute] !== 'object') {
                html_string += '<td>' + object[attribute] + '</td>\n';
            }
        }
        html_string += "</tr>\n";
    });
    html_string += "</table>";

    // Junta as três partes: O topo do HTML + A tabela gerada + O rodapé do HTML
    return string_until_body + html_string + string_from_body;
}

// Passo 4: Busca os dados na API externa de forma assíncrona
request('https://data.brisbane.qld.gov.au/api/explore/v2.1/catalog/datasets/bne-food-trucks-vehicles/records?limit=20',
    function (err, request_res, body) {
        if (!err) {
            // Converte o texto recebido para formato JavaScript e salva apenas o array de resultados
            var data = JSON.parse(body);
            request_body = data.results;
        }
    });

// Passo 5: Criação do servidor e resposta ao navegador
http.createServer(function (req, res) {
    // Verifica se os dados da API e a leitura do arquivo HTML já terminaram
    if (request_body && html_content) {
        res.writeHead(200, { 'Content-Type': 'text/html' }); // Informa que vai enviar um arquivo HTML
        res.end(createHtmlStringFromJSON(request_body)); // Executa a função e envia a página pronta para o usuário
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' }); // Se ainda não carregou, avisa que é apenas texto
        res.end("Ainda carregando os dados..."); // Mensagem temporária exibida na tela
    }
}).listen(8080); // Inicia o servidor na porta 8080

// Passo 6: Leitura do arquivo HTML base
fs.readFile('./index.html', 'utf8', function (err, html) {
    if (err) {
        throw err; // Trava a execução caso o arquivo não seja encontrado
    }
    // Salva o conteúdo lido na variável global
    html_content = html;
});