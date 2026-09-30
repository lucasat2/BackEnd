require("dotenv").config();

const express = require("express");

const connectDatabase = require("./config/database");
const productRoutes = require("./routes/productRoutes");
const logger = require("./middlewares/loggerMiddleware");
const errorHandler = require("./middlewares/errorMiddleware");

const app = express();

connectDatabase();

app.use(express.json());
app.use(logger);

app.use(productRoutes);

const Product = require("./models/Product");


app.post("/teste-produto", async (req, res) => {
  const produto = await Product.create({
    nome: "Mouse Gamer",
    preco: 120,
    categoria: "Informática",
    estoque: 10
  });

  res.status(201).json(produto);
});


app.use((req, res) => {
    res.status(404).json({
        erro: "Rota não encontrada."
    });
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});