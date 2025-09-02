const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 8081;

app.get("/usuarios", (req, res) => {
  const { nome } = req.query; // Obtendo o nome do usuario da query
      let usuarios = JSON.parse(data);
  try {
    // Ler o arquivo JSON
    const data = fs.readFileSync("./usuarios.json", "utf-8");
    // Conversão de .json -> objeto .JS
    let usuarios = JSON.parse(data);
    res.status(200).json(usuarios);
  } catch (error) {
    console.error("Erro ao ler o arquivo JSON", error);
    res.status(500).send("Erro interno no servidor!");
  }

  if (nome) {
    usuarios = usuarios.filter((usuario) =>
      usuario.nome.toLowerCase().includes(nome.toLowerCase())
    );
    res.status(200).json(usuarios);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
