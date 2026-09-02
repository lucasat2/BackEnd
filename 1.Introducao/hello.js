var http = require('http')
var dayjs = require('dayjs')
var customParseFormat = require('dayjs/plugin/customParseFormat')
dayjs.extend(customParseFormat)

// Funcao que sera passada para o servidor

//Moment Js que informa que o acesso ao horario nao é permitido

function serverCallback(req, res) {
    var begin_time = dayjs("7:00", "HH:mm");
    var end_time = dayjs("17:00", "HH:mm");
    var message = "Ola " + process.argv[2] + "\n";
    message += "Seja bem vindo a nossa pagina\n";
    message += "Agora sao " + dayjs().format("HH:mm") + ". \n";
    message += "Funcionamos de " + begin_time.format("HH:mm") + " ate " + end_time.format("HH:mm") + ". \n";


    var begin_difference = begin_time.diff(dayjs(), 'minutes');
    var end_difference = dayjs().diff(end_time, 'minutes');

    if (begin_difference > 0) {
        message += "Retorne em " + begin_difference + " minutos .\n";
    }
    if (end_difference > 0) {
        message += "Por favor, retorne amanhã. /n";
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(message);
}


// Cria um servidor para ouvir na porta 8080
http.createServer(serverCallback).listen(8080);
