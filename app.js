import express from 'express';
import cors from 'cors'
import HelloController
    from "./controllers/hello-controller.js"
import UserController
    from "./controllers/users/users-controller.js"
import TuitsController
    from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";

mongoose.connect('mongodb+srv://123:zxcvb@123.o3jb6fb.mongodb.net/?retryWrites=true&w=majority');
//const CONNECTION_STRING = process.env.DB_CONNECTION_STRING||'mongodb://localhost:27017/tuiter'
const db = mongoose.connection;
db.once("open", () => {console.log('connected successfully')})

const app = express()
app.use(cors())
app.use(express.json());
TuitsController(app);
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000, () => {console.log("server is running on 4000")});