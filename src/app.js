const express = require('express');
const path = require('path');

const publicDirectoryPath = path.join(__dirname,'../public')

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));


app.get('',(req,res)=>{
    res.render('index')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:"I don't need any help"
    })
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
