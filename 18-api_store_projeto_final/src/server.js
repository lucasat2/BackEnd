
const express = require("express");

const connectDatabase = require("./config/database");

const app = express();

connectDatabase();



app.get("/", (req, res) => {
    return res.json({message: "Api funcionando"}) 
});

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000")
});
