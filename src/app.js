const express = require('express');
const path = require('path');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

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
    if(!req.query.address) return res.send({error: 'You must provide an address term.'})

    geocode(req.query.address,(error,{lat=1, lng=1}={})=>{
        if(error) return res.send({error});

        forecast(lat, lng,(error,{current, location})=>{
           return res.send({
                country:location.country,
                region:location.region,
                tempreture: current.temperature,
                feelslike: current.feelslike,

            })
        })

    })

})
app.get('/help/*',(req,res)=>{
    res.render('404',{
        errorMessage: 'this articl in help section not found',

    })
})

app.get('/products',(req,res)=>{
    if(!req.query.search) return res.send({error:'You must provide a search term.'})
    console.log(req.query)
    res.send({
        products:[]
    })
})

app.get('*',(req,res)=>{
    res.render('404',{
        errorMessage: 'This page not found.',
    })
})

app.listen(port,()=>{
    console.log('Your app server '+port)
})
