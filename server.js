const express = require ('express'); //importation d'express
const app= express();
app.listen(3500,function(){
    console.log('server started successfuly');

});
app.get('/toto', function(req, res) 
{
     res.send('HELLO TOTO');});
app.get('/isig', function(req, res) 
{
     res.send('Fier et plein de dignité');});