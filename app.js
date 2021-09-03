
//Importando o módulo server
const app = require('./config/server')

//Importação do Mockup
const noticias = require('./mockup')

//criando a nossa primeira rota
app.get('/', (req, res) => {
    res.send("<h1>Olá mundo da Tecnologia</h1>")
})

app.get('/noticias', (req, res) => {
    res.send('<h1>Todas as noticias cabulosas de Tecnologia </h1>')
})

//Iniciando  o servidor na porta 3000
app.listen(3000, () => {
    console.log("Escutando na porta 3000 com Express")
    console.log("Pressione CTRL+C para encerra o servidor")
})