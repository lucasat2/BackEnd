require("dotenv").config();

const express = require("express");

const connectDatabase = require("./config/database");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const logger = require("./middlewares/loggerMiddleware");
const errorHandler = require("./middlewares/errorMiddleware");

const app = express();

connectDatabase();

app.use(express.json());
app.use(logger);

app.use(productRoutes);
app.use(userRoutes);
app.use(authRoutes);

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