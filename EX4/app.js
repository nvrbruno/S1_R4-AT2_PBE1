const express = require("express");
const app = express();
const fs = require("fs");
const PORT = 8081;

app.get("/livros", (req, res) => {
  const { titulo, autor, data } = req.query; // Obtendo a data da query
  try {
    // Ler o arquivo JSON
    const fileData = fs.readFileSync("./livros.json", "utf-8");
    // Conversão de .json -> objeto .JS
    let livros = JSON.parse(fileData);

    if (livro) {
      livros = livros.filter((livro) =>
        livros.nome.toLowerCase().includes(livros.toLowerCase())
      );
      res.status(200).json(autores);
    }

    if (autor) {
      livros = livros.filter((livro) =>
        autores.nome.toLowerCase().includes(autor.toLowerCase())
      );
      res.status(200).json(autores);
    }

    // Filtra por data, se data for fornecida
    if (data) {
      livros = livros.filter((livro) => livro.data <= data);
    }

    res.status(200).json(livros);
  } catch (error) {
    console.error("Erro ao ler o arquivo JSON", error);
    res.status(500).send("Erro interno no servidor!");
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
