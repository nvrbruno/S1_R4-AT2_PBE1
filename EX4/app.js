// Importar o módulo do Express para usar suas funcionalidades
const express = require("express");
// Cria uma instância do Express, que representa o aplicativo web
const app = express();
const PORT = 8081; // Configura a porta 8081 como a porta para comunicação
const fs = require("fs");

app.get("/livros", (req, res) => {
  const { titulo, autor, data } = req.query; 
  try {
    const arquivoData = fs.readFileSync("./livros.json", "utf-8");
    let livros = JSON.parse(arquivoData);

    if (titulo) { //Cria um filtro onde ele procura pelo nome enviado pelo usuario.
      livros = livros.filter((livro) =>
        livro.titulo.toLowerCase().includes(titulo.toLowerCase())
      ); // Transforma tudo em letra minuscula
    }

    if (autor) {
      livros = livros.filter((livro) =>  //Cria um filtro onde ele procura pelo nome enviado pelo usuario.
        livro.autor.toLowerCase().includes(autor.toLowerCase())
      );// Transforma tudo em letra minuscula
    }

    if (data) {
      livros = livros.filter((livro) => livro.data <= data);
    }// Função que procura o envento de acordo com a data (minima)

    res.status(200).json(livros);
  } catch (error) {
    console.error("Erro ao ler o arquivo JSON", error);
    res.status(500).send("Erro interno no servidor!");
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});