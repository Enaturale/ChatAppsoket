import { io } from "socket.io-client";
const socket = io.connect("192.168.131.90:3000");
export default socket;