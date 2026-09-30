
require("dotenv").config();

const express = require("express");

const connectDatabase = require("./config/database")
const productRoutes = require("./routes/productRoutes");
const logger = require("./middleware/loggerMiddleware");
const errorHandler = require("./middleware/errorMiddleware");
const mostrarDataHora = require("./middleware/timeMiddleware");
const rotaInexistente = require("./middleware/rotaInexistente");

const app = express();

connectDatabase();

app.use(express.json());

app.use(logger)

app.use(mostrarDataHora); // Middleware de tempo

app.use(productRoutes);

app.use(rotaInexistente); // Middleware de rota inexistente.


// app.use((req, res) => {
//   res.status(404).json({
//     error: "Rota não encontrada"
//   });
// });

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});