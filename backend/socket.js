const socketIO = require("socket.io");

module.exports = (server) => {
  const io = socketIO(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  let users = [];

  const addUser = (userId, socketId) => {
    if (!users.some((user) => user.userId === userId)) {
      users.push({ userId, socketId });
    }
  };

  const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
  };

  const getUser = (userId) => {
    return users.find((user) => user.userId === userId);
  };

  io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("addUser", (userId) => {
      addUser(userId, socket.id);
      io.emit("getUsers", users);
    });

    socket.on("sendMessage", ({ senderId, receiverId, text, images }) => {
      const user = getUser(receiverId);
      io.to(user?.socketId).emit("getMessage", { senderId, receiverId, text, images, seen: false });
    });

    socket.on("disconnect", () => {
      removeUser(socket.id);
      io.emit("getUsers", users);
      console.log("a user disconnected");
    });
  });
};
