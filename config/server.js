// importando o express
const express = require('express');

//criando um objeto express na variável app
const app = express();
//Definimos o EJS como motor  de views
app.set('view engine', 'ejs')
// Definimos o caminho par os nossos arquivos estaticos
app.use(express.static('./views/public'))