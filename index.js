
const io = require('socket.io')(process.env.PORT || 8000,  {
    cors: {
        origin:["http://localhost:3000"]
    }
});
const users={};
io.on('connection', socket =>{
    socket.on('new-user-joined', name =>{
        users[socket.id]=name;
        socket.broadcast.emit('user-joined',name);
    });
    socket.on('send',(message,name) =>{
        // console.log(message);
        // console.log(name);
        socket.broadcast.emit('receive',{message:message,name:name})
    });
})