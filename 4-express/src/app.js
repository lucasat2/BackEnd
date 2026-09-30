const express = require("express");


const app = express();

app.get("/", (req, res) => {
    res.json({ message: "API funcionando" }); 
});


app.get("/produtos", (req, res) => {
    res.json([
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


app.get("/cursos", (req, res) => {
    res.json([ 
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


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000"); 
});