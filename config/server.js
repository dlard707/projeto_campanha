// Módulo de configuração do app
const express = require ('express');

const app = express();

const session - require(express-session)

//Configuraçâo do jsonparse e bodyparse
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// definido o motor de views como sendo EJS
app.set('view engine','ejs')

// configurar o caminho da pasta views
app.set('views', './app/views') // app/views

//configuração de arquivos estáticos
app.use(express.static('./app/public')) // app/public 

app.use

module.exports = app