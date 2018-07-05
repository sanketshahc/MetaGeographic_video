var ip = require('ip');
const fs = require('fs');
const path = require('path');
const certOptions = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.crt')
}
const express = require('express')
const app = express()
const https = require('https').createServer(certOptions, app, console.log('up'))
const static = require('express').static;
app.use(static('public'));

const socketIO = require('socket.io')(https);

https.listen(443);

// retrieves lan ip and writes to file readable by front end. 
console.log(ip.address())
fs.writeFileSync('public/file.txt',ip.address())

socketIO.on('connection', 
  function(socket) {
  // set some property to mark them and push them to a blANK array right here.
  // tell them which room to go to. 
  console.log('socket here:',socket)
  // convenience function to log server messages on the client
    function log() {
      var array = ['Message from server:'];
      array.push.apply(array, arguments);
      socket.emit('log', array);
    }

  // for a real app, would be room-only (not broadcast)
  // relays ALL message to ALL users!
    socket.on('message', function(message) {
      log('Client said: ', message);
      socket.broadcast.emit('message', message);
    });

  // from client, 
    socket.on('create or join', function(room) {
      log('Received request to create or join room ' + room);

  // room is passed from client...which will change. 
  // try adding .rockets after [room]
      var clientsInRoom = socketIO.sockets.adapter.rooms[room];
      var numClients = clientsInRoom ? Object.keys(clientsInRoom.sockets).length : 0;

      log('Room ' + room + ' now has ' + numClients + ' client(s)');

      if (numClients === 0) {
        // seems same thing as below, but different emission.
        socket.join(room);
        log('Client ID ' + socket.id + ' created room ' + room);
        socket.emit('created', room, socket.id);

      } else if (numClients === 1) {
        log('Client ID ' + socket.id + ' joined room ' + room);
        socketIO.sockets.in(room).emit('join', room);
        socket.join(room);
        socket.emit('joined', room, socket.id);
        socketIO.sockets.in(room).emit('ready');
      } else { // max two clients
        socket.emit('full', room);
      }
    });

  // not sure if this is used, dont see it anywhere else
  socket.on('ipaddr', function() {
    var ifaces = os.networkInterfaces();
    for (var dev in ifaces) {
      ifaces[dev].forEach(function(details) {
        if (details.family === 'IPv4' && details.address !== '127.0.0.1') {
          socket.emit('ipaddr', details.address);
        }
      });
    }
  });
});


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});


