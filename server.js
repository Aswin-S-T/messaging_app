const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const server = require('http').Server(app)
const io = require('socket.io')(server)
const hbs = require('express-handlebars')




app.set("view engine",'hbs')
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.render('index')
})




server.listen(port,()=>{
    console.log('Server is running at the port 3000')
})

io.on('connection',(socket)=>{
    socket.on('message',(msg)=>{
        console.log(msg)
        socket.broadcast.emit('message',msg)
    })
})