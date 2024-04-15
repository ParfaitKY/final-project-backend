import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import messageRoutes from "../routes/message.routes.js";
import authRoutes from "../routes/auth.routes.js";
import userRoutes from "../routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT=process.env.PORT || 5000

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.get('/',(req,res) => {
    //root rote http://localhost:5000/
   res.send('hello world!!!');
});


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Le serveur tourne en port ${PORT}`);
});
