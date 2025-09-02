// Importar o módulo do Express para usar suas funcionalidades
const express = require("express");
// Cria uma instância do Express, que representa o aplicativo web
const app = express();
const PORT = 8081; // Configura a porta 8081 como a porta para comunicação
const fs = require("fs");

app.get("/produtos/:pagina", (req, res) => {
  try {
    const arquivoData = fs.readFileSync("./produtos.json", "utf-8");
    let todosProdutos = JSON.parse(arquivoData); 

    let pagina = parseInt(req.params.pagina);

    if (isNaN(pagina) || pagina < 1) {
      return res.status(400).send("Número da página inválido.");
    } // Verifica se a pagina solicitada é válida

    let produtosOrganizadas;

    if (pagina === 1) {
      produtosOrganizados = todosProdutos.slice(0, 10);
    } else if (pagina === 2) {
      produtosOrganizados = todosProdutos.slice(10, 20);
    } else if (pagina === 3) {
      produtosOrganizados = todosProdutos.slice(20, 30);
    } else {
      return res.status(404).send(`A página ${pagina} não existe.`);
    } // condição que divide a página de acordo com a quantidade de produtos

    res.status(200).json(produtosOrganizados); 
  } catch (error) {
    console.error("Erro ao ler o arquivo JSON", error);
    res.status(500).send("Erro interno no servidor!");
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
