const express = require('express');
const path = require('path');
const hbs = require('hbs');

const publicDirectoryPath = path.join(__dirname,'../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname,'../templates/partials');
const app = express();

app.set('view engine', 'hbs');
app.set('views', viewsPath);
app.use(express.static(publicDirectoryPath));

hbs.registerPartials(partialsPath);

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About me'
    })
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
app.get('/help/*',(req,res)=>{
    res.render('404',{
        errorMessage: 'this articl in help section not found',

    })
})
app.get('*',(req,res)=>{
    res.render('404',{
        errorMessage: 'This page not found (404)',
    })
})

app.listen(3000,()=>{
    console.log('Your app server.....')
})
