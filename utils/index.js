// import { Platform } from "react-native";
// import { io } from "socket.io-client";
// export const BaseUrl =
//   Platform.OS === "android" ? "http://192.168.1.6:3000" : "http://localhost:3000";

// export const socket = io.connect(BaseUrl);
import { io } from "socket.io-client";
const socket = io('http://192.168.1.6:3000');
export default socket;