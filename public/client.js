const socket = io()
let name;
let time;
let image;
let textarea = document.querySelector('#textarea')
let messageArea = document.querySelector('.message__area')
let userList = document.getElementById('userList')
// do{
//     name = prompt('Please enter your name')

// }while(!name)

function val()
{
    name = document.getElementById('name').value
}
val(name);

textarea.addEventListener('keyup',(e)=>{
    if(e.key === 'Enter'){
        sendMessage(e.target.value)
    }
})

var openFile = function(file){
    var input = file.target;
    var reader = new FileReader();
    reader.onload = function(){
        var dataURL = reader.result;
        var output = document.getElementById('output')
        output.src = dataURL;
    }
    reader.readAsDataURL(input.files[0])
}

function sendMessage(message){
    var time = new Date()
    var demo = document.getElementById('output').src
    let imagex = document.getElementById('images').src=demo
    var or = time.toLocaleString('en-US',{hour: 'numeric',minute: 'numeric',hour12:true})
    let msg = {
        user:name,
        message: message.trim(),
        t: or,
        image:imagex
    }
    //append
    appendMessage(msg,'outgoing')

    //send to server
    socket.emit('message',msg)
    
}


function appendMessage(msg,type){
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className,'message')

    let markup = `
        <h4>${msg.user}</h4>
        <img src="${msg.image}">
        <p>${msg.message}</p>
        <span>${msg.t}</span>
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
}




//receive message

socket.on('message',(msg)=>{
    console.log(msg)
    appendMessage(msg,'incomming')
})