const path=require('path')
const express=require('express')
const hbs = require('hbs')

const app= express();


//Defining Path for Express Config
const publicDirPath=path.join(__dirname,"../public")
const viewPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//Setup handlebar engine and views location
app.set('view engine','hbs')
app.set('views',viewPath)
hbs.registerPartials(partialsPath)

//setupt static directory to work
app.use(express.static(publicDirPath))

 
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'Weather App',
        name:'Talib Waseem'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        help:'This is something helpful',
        title:"Help",
        name:"Talib Waseem"
    })
    
}) 
app.get('',(req, res) => {
    res.render('index',{
        title:'Weather App',
        name:'Talib Waseem'
    })
})

app.get('/weather',(req,res)=>{
    res.send({
        forecast:'It is Raining',
        location:'Karachi'
    })
}) 

app.get('/help/*',(req,res)=>{
    res.render('404',{
        title:'404',
        errorMessage:"Help Article Not Found",
        name:"Talib Waseem"
     })
})

app.get('*',(req,res)=>{
    res.render('404',{
         title:'404',
        errorMessage:"No Page Found",
        name:"Talib Waseem"
    })
})

app.listen(3000,()=>{
    console.log("Server is up on port 3000!")
})