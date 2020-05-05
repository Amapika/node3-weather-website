/*

    When we have to see the thing work on the web browser we need a server 
    so as we have created the weatherapp in our terminal which was working fine so if we have to put that on the 
    server so that anyone can turn up and go to website n check it so for that we need to built a server.

    1.so building the server using node js we  use express module
    2. create a webserver folder init npm n download npm i express@4.16.4 version
    3.   const express =require('express')
         const  app=express()
            -app.com
            -app.com/help
            -app.com/about

     - here above we can see user can request a specific url request. We have a domain named app.com and all of these
       going to run on a single express server
    
    4.What we have to do is to setup the multiple routes.
    
    5. So to setup our server when someone else tries to get something at specific route we have to GET method 
    
            -app.get()
    
    6.This method takes to arguments 
        - first one is  the route.i.e partial
        - second argument is the function to describe what should we response when the request comes up there in that route
                
                    Now again this function takes to arguments
                       -app.get('',(req,res)=>{
                            code..... for response
                       })
    7. Now if we have to send back something to be displayed in the web browser like we used to display in terminal
        using console.log similarly to get the response back in the web browser and to send the request to our 
        webserver we have "  res.send() "
       
    8. Here we dont finish up after creating the get method and sending response throught res.send() method
        we need to start up the server. we can start server using:-

                    app.listen(3000,()=>{
                                3000 is port number where we gonna listen to
                            is a synchronous method which would be running in main stack

                            console.log('server started')
                        
                  })

                app.get('app.com/help',(req,res)=>{
                    res.send('help page')
                })

    9.to make use of html files we use path module 
                - path module have join method which takes two args
                         1. __dirname,
                         2.string to manipulate like we went from src directory to public directory to get access for index.html

                -using express module we can import or mainly say make use of this for serving the app.js
                        1.app.use() method is used for importing purpose
                            -app.use(express.static) 
                                static again takes two args or may be say path.join to reach index.html
                            -app.use would be serving just for main route
                               
                            <!-- for referencing stylesheet or including stylesheet in our docoument or html page we use command:-
    <link ref="stylesheet" href="./css/style.css" (path of the file)> 
    
    for referencing image which we have to put up tag:-
    <img src="path('./img/Aman.jpg/')">
    
    for importing json format to display on web broswer we use tag:-
    <script src="path or file name"></script>


    -hbs is an handlebar tool or module we can say which helps us to render dynamic contents or documents on web
    - It helps us to create the code which is resuable n can be used throughout the code in different places
    - to use handlebars download hbs@version using npm module in the root of the folder you are working with
    - installation of this template engine is quiet east we can jst set it up in the code by mentioning set method through
        express module
            -const app=express()
            -app.set('')
            -set method takes two arguments one is the key i.e view engine this should be exactly same with the space 
            or it wont get which value you r referring for and 
            -second argument is the value which the module we are using

    once we install in our app.js(current working js file of our application) using app.set('view engine','hbs')
    we can render the request or send the response using our same get command
        app.get('',(req,res)=>{

            now we have another method in res which can be used to render the dynamic contents on our browser :-

            res.render('name of the view and there is no need for file extension ')
            eg: res.render('index')
            it allows us to render one of our views 
            likely res.send() allows us to send html array or json or img on our web browser
        })

-->


*/
const geocode= require('./utils/geocode')
const forecast=require('./utils/forecast')
const path=require('path')//we gonna use inbuilt path module to make use of index.html in this file

const express=require('express')
const hbs=require('hbs')

console.log(__dirname)
console.log(__filename)


const app=express()

//define the path 
const publicDir=path.join(__dirname,'../public')
const viewPath=path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')

//set the config using set
app.set('view engine','hbs')
app.set('views',viewPath)
hbs.registerPartials(partialsPath)

//set up directory to serve
app.use(express.static(publicDir))

app.get('', (req,res)=>{
    res.render('index',{
    title:'Welcome to my website',
    name:'Aman'
    })
})

//for app.com/help
app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title:'Help Page',
        name:'Aman'
    })
})
//for app.com/about Us
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'aboutUs',
        name:'Aman'
    })
})

/* Goal : update weather endpoint to accept address

1.No address? send back an error message
2.Address? Send back the static JSON
    -Add address property onto JSON returns the provided address
3.Test /weather and /weather?address=philadelphia
*/


app.get('/weather', (req, res) => {
    if(!req.query.address)
    {
        return res.send({
             error:"Please provide the Address"
    
            })  
    }
    
    var address=req.query.address   
        geocode(address, (error, data={}) => {
            if(error){
                return res.send(error)
            }
            
            forecast(data.latitude,data.longitude,(error,forecastData)=>{
                if(error){
                    return res.send(error)
                }
        
                res.send({
                    location:data.location,
                    forecast:forecastData
                
                })
            })
        })
    })



app.get('/products', (req, res) => {
    if(!req.query.search)
    {
        return res.send({
             error:"Please provide the search key"
    
            })
    }
    res.send({
        products:[]
    })
})
//for app.com/weather route

app.get('', (req, res) => {
    res.render('index',{
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})
app.get('/help/*',(req,res)=>{
    res.render('404',{
        errorMessage:'Help  not found..',
        title:'Page not found404',
        name:'Aman'
    })
})
app.get('*',(req,res)=>{
    res.render('404',{
        errorMessage:'you have entered an invalid url..',
        title:'404',
        name:'Aman'
    })
})
app.listen(3000,(req,res)=>{
    console.log('Server Started')
})