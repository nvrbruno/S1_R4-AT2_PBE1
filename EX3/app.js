const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 8081;

app.get("/eventos", (req, res) => {
  const { data } = req.query; // Obtendo a data da query
  try {
    // Ler o arquivo JSON
    const fileData = fs.readFileSync("./eventos.json", "utf-8");
    // Conversão de .json -> objeto .JS
    let eventos = JSON.parse(fileData);

    // Filtra por data, se data for fornecida
    if (data) {
      eventos = eventos.filter((evento) => evento.data <= data);
    }

    res.status(200).json(eventos);
  } catch (error) {
    console.error("Erro ao ler o arquivo JSON", error);
    res.status(500).send("Erro interno no servidor!");
  }});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
