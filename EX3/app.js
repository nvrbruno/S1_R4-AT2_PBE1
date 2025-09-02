// Importar o módulo do Express para usar suas funcionalidades
const express = require("express");
// Cria uma instância do Express, que representa o aplicativo web
const app = express();
const PORT = 8081; // Configura a porta 8081 como a porta para comunicação
const fs = require("fs");

app.get("/eventos", (req, res) => {
  const { data } = req.query; 
  try {
    const arquivoData = fs.readFileSync("./eventos.json", "utf-8");
    let eventos = JSON.parse(arquivoData); //Exporta o arquivo JSON para efetuar as leiuras

    if (data) {
      eventos = eventos.filter((evento) => evento.data <= data);
    }// Função que procura o envento de acordo com a data (minima)

    res.status(200).json(eventos);
  } catch (error) {
    console.error("Erro ao ler o arquivo JSON", error);
    res.status(500).send("Erro interno no servidor!");
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});