var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    //TODO: Send Ack to client
    socket.on('acknowledgement', function (data, sendAck) {
        console.log('Data on Server -----> ' + data);
        sendAck(data);
    });

});

server.listen(1200, function () {
    console.log('Server connected..');
});
