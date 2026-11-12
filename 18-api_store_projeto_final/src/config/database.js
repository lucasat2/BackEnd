const mongoose = require("mongoose");

async function connectDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo db conectado com sucesso");
  } catch (error) {
      console.error("Conexao falhou:", error.message);
      process.exit(1);
  }
}


module.exports = connectDatabase;