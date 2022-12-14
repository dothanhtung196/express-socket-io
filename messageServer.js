const io = require("socket.io")({
    allowEIO3: true,
});

const messageServer = {
    io: io,
};

io.on("connection", function (socket) {
    console.log(`⚡Socket: Have connect: ${socket.id}`);

    socket.on("disconnect", function () {
        console.log(`🔥Socket: Disconnect ${socket.id}`);
    });

    socket.on("client-send", function(data){
        io.sockets.emit("server-send", data);
    })
});

module.exports = messageServer;
