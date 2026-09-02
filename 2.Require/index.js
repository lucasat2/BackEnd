var http = require('http');
var request = require('request');

var request_body;

function createHtmlStringFromJSON(retrievedData) {
    var html_string = '<html>\n';
    html_string += '<head>\n';
    html_string += '<title>Data aggregator</title>\n';
    html_string += '</head>\n';
    html_string += '<body>\n';
    html_string += '<table>\n';

    // Cabeçalho da tabela
    html_string += '<tr>\n';

    for (var attribute in retrievedData[0]) {
        if (typeof retrievedData[0][attribute] !== 'object') {
            html_string += '<td>' + attribute + '</td>\n';
        }
    }

    html_string += '</tr>\n';

    // Dados da tabela
    retrievedData.forEach(function (object) {
        html_string += '<tr>\n';

        for (var attribute in object) {
            if (typeof object[attribute] !== 'object') {
                html_string += '<td>' + object[attribute] + '</td>\n';
            }
        }

        html_string += '</tr>\n';
    });

    html_string += '</table>\n';
    html_string += '</body>\n';
    html_string += '</html>';

    return html_string;
}


// Faz a requisição para a API
request(
    'https://data.brisbane.qld.gov.au/api/explore/v2.1/catalog/datasets/bne-food-trucks-vehicles/records?limit=20',
    function (err, response, body) {

        if (err) {
            console.log(err);
            return;
        }

        // Converte o JSON recebido
        var data = JSON.parse(body);

        // Pega somente o array "records"
        request_body = data.results;

        console.log('Dados recebidos:', request_body.length);
    }
);


// Cria o servidor
http.createServer(function (req, res) {

    if (request_body) {

        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.end(
            createHtmlStringFromJSON(request_body)
        );

    } else {

        res.writeHead(200, {
            'Content-Type': 'text/plain'
        });

        res.end('Ainda carregando os dados...');

    }

}).listen(8080);
