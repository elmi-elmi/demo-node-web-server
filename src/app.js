const express = require('express');
const path = require('path');

const publicDirectoryPath = path.join(__dirname,'../public')

const app = express();

app.use(express.static(publicDirectoryPath));


app.get('/help',(req,res)=>{
    res.send(['help me please', 'what shal i do?'])
})

app.get('/about',(req,res)=>{
    res.send('<h1>About Section</h1>');
})

app.get('/weather',(req,res)=>{
    res.send({
        forecast:'sunny',
        location:'shiraz'
    });
})

app.listen(3000,()=>{
    console.log('Your app server.....')
})
