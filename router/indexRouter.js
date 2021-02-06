const express = require('express');
const rout = express.Router();

rout.get('/',(req,res)=>res.render('index'));

module.exports = rout;