const porta = 33333;

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const bandoDeDados = require('./bancoDeDados');

app.use(bodyParser.urlencoded({ extended: true}));


app.get('/produtos', (req, res, next)=> {
  res.send(bandoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next)=> {
  res.send(bancoDeDados.getProduto(req.params.id))
})



app.post('/produtos', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })

res.send(produto) // JSON

})

app.listen(porta, ()=> {
  console.log('Servidor executando na porta ${porta}')
} )