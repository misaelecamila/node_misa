const express  = require('express');
const rout = express.Router();
const Artista = require('../models/artistaModel');


rout.get('/',async (req,res)=>{
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

module.exports = rout;