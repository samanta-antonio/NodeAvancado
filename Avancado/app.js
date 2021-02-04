const express = require('express');
const bodyParser = require('body-parser');
const pegarJogos= require('./functions/procurarJogo');

const app = express();


app.set('view engine', 'ejs');
app.set('views', './views');
app.use(bodyParser.urlencoded({extended:true}));
app.set(bodyParser.json());


app.get('/', async (req,res) => {
    
    res.render('index', {jogos: []});
})

app.post('/', async (req,res) => {
    const jogo = req.body;
    res.render('index', {jogos: await pegarJogos(jogo.nome,jogo.nota)});
})

const porta =777;

app.listen(porta)





