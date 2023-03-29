// importing express and socketio
const express = require('express')
const http = require('http') // listens for incoming requests and sends responses back to the client.


// Socket.IO is a JavaScript library that enables real-time, bidirectional communication over single TCP 
const Server = require("socket.io").Server
// using server we can emit event to connected clients

const app = express()



const server = http.createServer(app)

// instance to create socketIO server and pass in the http server instance

// here using CORS we allows servers to selectively allow cross - origin requests while blocking others (to get the access to the resources)

const io = new Server(server, {
    cors: {
        origin: "*"
    }
})



// method to listen for events
// then server will detect the event 
io.on("connection", (socket) => {
    console.log('We are connected')

    // Play the sound when a client connects


    socket.on("chat", chat => {
        io.emit('chat', chat)
    })

    socket.on('disconnect', () => {
        console.log('disconnected')
    })

})



server.listen(5001, () => console.log('Listening to port 5001'))

