import { io } from "socket.io-client";

// Change this to your Render socket server
const ENDPOINT = "https://eshopx-socket-server.onrender.com";

const socket = io(ENDPOINT, { transports: ["websocket"] });

export default socket;
