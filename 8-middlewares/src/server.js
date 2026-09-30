const express = require("express");

const productRoutes = require("./routes/productRoutes");
const logger = require("./middleware/loggerMiddleware");
const errorHandler = require("./middleware/errorMiddleware");
const mostrarDataHora = require("./middleware/timeMiddleware");
const rotaInexistente = require("./middleware/rotaInexistente");

const app = express();

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

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});