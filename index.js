// 1. import json server
const jsonServer = require('json-server')

//2.create server application using json server
const mediaAppServer = jsonServer.create()

//3.create a middleware used by json server
const middleWare = jsonServer.defaults()

//4.create router: set up for router for db.json file
const router = jsonServer.router('db.json') 

//5.applying middleware to server
mediaAppServer.use(middleWare)

//6.applying router to server
mediaAppServer.use(router)

//7.Define Port
const PORT = 3000

//8.Startin the server
mediaAppServer.listen(PORT,()=>{
    console.log("Media App Server Started on PORT :",PORT);
    
})