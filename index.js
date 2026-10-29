require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API da loja do Felipe funcionando!');
});

app.post('/usuario', (req, res) => {
    const { nome, idade } = req.body;

    res.json({
        mensagem: 'Usuário recebido!',
        nome: nome,
        idade: idade
    });
});


app.post('/produto', (req, res) => {
    const { nomeProduto, tamanho, cor, quantidade, preco } = req.body;

    res.json({
        mensagem: 'Produto recebido!',
        nomeProduto: nomeProduto,
        tamanho: tamanho,
        cor: cor,
        quantidade: quantidade,
        preco: preco
    });
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});