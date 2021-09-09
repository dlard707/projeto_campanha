
//Importando o módulo server
const app = require('./config/server')

//Importação do Mockup
//const noticias = require('./mockup')

//Importação do módulo dbConnection
const db = require('./config/dbConnection')
//Definindo a porta da aplicação 
const port = process.env.PORT || 3000

//criando a nossa primeira rota
app.get('/', async(req, res) => {
    //Consulta SQL
    var result = await db.query('SELECT*FROM noticias ORDER BY id_noticia DESC LIMIT 3')
    // res.send("<h1>Olá mundo da Tecnologia</h1>")
    res.render('home/index', {noticias: result.rows, title:'Home'})

})

//rota Noticias
app.get('/noticias', async(req, res) => {

    var result = await db.query('SELECT*FROM noticias ORDER BY id_noticia DESC')
   // res.send('<h1>Todas as noticias cabulosas de Tecnologia </h1>')
    res.render('noticias/noticias', {noticias:result.rows, title: 'Noticias'})
})

//rota Noticia 
app.get('/noticia', async(req, res) => {
    // recuéra a noticia por método get
    var id = req.query.id

    let result = await db.query('SELECT*FROM noticias WHERE id_noticia = $1',[id])

    res.render('noticias/noticia', {noticia:result.rows[0], title: 'Noticia'})
})

//Rota responsável pela autenticação do usuário

app.post('/admin/autenticar', (req, res) => {

    const {usuario, senha} = req.body

    if(usuario === 'root' && senha === 'cellep1234'){
        req.session.autorizado = true
    }

    res.redirect('/admin')
})

//Rota respponsavel pelo recurso admin 
app.get('/admin', (req, res) => {
    if(req.session.autorizado){
        res.render('admin/form_add_noticia', {title: 'Admin', autorizado:req.session.autorizado})
    }else{
        res.render('admin/login', {title: 'Login'})
    }
})

//Rota responsável pela saida do usuario  
app.get('/admin/sair', (req, res) => {

    req.session.destroy( (err)  => {
        res.redirect('/admin')
    })
})

//rota reponsável por salvar noticias 
app.post('/admin/salvar-noticia', async (req, res) => {

    let {titulo,conteudo} = req.body

    await db.query('INSERT INTO noticias(titulo, conteudo) VALUES ($1, $2)', [titulo,conteudo], (err, result) =>{
        res.redirect('/noticias')
    })
})


//Iniciando  o servidor na porta 3000
app.listen(port, () => {
    console.log("Escutando na porta 3000 com Express")
    console.log("Pressione CTRL+C para encerra o servidor")
})