const express = require('express');
const app = express();
const Artista = require('./models/artistaModel')
require('dotenv').config()
const port = process.env.PORT ||3000
//const port = 3000

app.set('view engine','ejs');
app.set('views',__dirname+'/views');

//conexao banco de dados
const mongoose = require('mongoose');
//const user = "rockmiih";
///const  password = "SpUKHWNuICTgYBSt";
//const dbname = "artistas";
const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.qrwoi.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
mongoose.connect(uri,{
    useNewUrlParser:true, useUnifiedTopology:true
}).then(()=>console.log('conectado ao banco de dados')).catch(e=>console.log(e))


app.use('/',require('./router/indexRouter'));
//app.use('/artista',require('./router/artistaRouter'))


app.get('/artista',async (req,res)=>{
    try{
        const arrayArtist = await Artista.find();
        console.log(arrayArtist)
        res.render('artista',{
            artista:arrayArtist
        })
    }catch (e) {
        console.log(e)
    }
})






app.use((req,res,next)=>{
    res.status(404).render('erro');
});

app.listen(port,()=>console.log("servidor rodando na porta",port));