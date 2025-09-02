// Importar o módulo do Express para usar suas funcionalidades
const express = require("express");
// Cria uma instância do Express, que representa o aplicativo web
const app = express();
const PORT = 8081; // Configura a porta 8081 como a porta para comunicação
const fs = require("fs");


app.get("/usuarios", (req, res) => {
  try {
    // Ler o arquivo JSON
    const data = fs.readFileSync("./usuarios.json", "utf-8");
    // Conversão de .json -> objeto .JS
    let usuarios = JSON.parse(data);
    res.status(200).json(usuarios); // Envia uma mensagem de sucesso e exibe os usuarios
  } catch (error) {
    console.error("Erro ao ler o arquivo JSON", error); // Se o arquivo JSON não for lido, apresenta uma mensagem de erro
    res.status(500).send("Erro interno no servidor!");
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
