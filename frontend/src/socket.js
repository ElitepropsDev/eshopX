import { io } from "socket.io-client";

const ENDPOINT = "http://localhost:8000"; // backend URL
const socket = io(ENDPOINT, { transports: ["websocket"] });

export default socket;
