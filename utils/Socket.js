import { io } from "socket.io-client";
const socket = io.connect("https://192.168.100.27:3000");
export default socket;