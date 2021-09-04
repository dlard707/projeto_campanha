
//Importando o módulo server
const app = require('./config/server')

//Importação do Mockup
const noticias = require('./mockup')

//criando a nossa primeira rota
app.get('/', (req, res) => {
    // res.send("<h1>Olá mundo da Tecnologia</h1>")
    res.render('home/index', {noticias: noticias.slice(0,3)})

})

//rota Noticias
app.get('/noticias', (req, res) => {
   // res.send('<h1>Todas as noticias cabulosas de Tecnologia </h1>')
    res.render('noticias/noticias', {noticias:noticias})
})

//rota Noticia 
app.get('/noticia', (req, res) => {
    // recuéra a noticia por método get
    var id = req.query.id

    res.render('noticias/noticia', {noticia:noticias[id]})
})


//Iniciando  o servidor na porta 3000
app.listen(3000, () => {
    console.log("Escutando na porta 3000 com Express")
    console.log("Pressione CTRL+C para encerra o servidor")
})