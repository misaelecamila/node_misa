const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const meuSchema = new Schema({
    nome:String,
    imagem:String
});

const Artista = mongoose.model("artista",meuSchema,"fotos");
module.exports = Artista;