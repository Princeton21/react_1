import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import "dotenv/config.js";
import routes from "./routes/todo.routes.js";
import connectDB from "./config/db.js";

const app = express();
app.use(express.json());


//Connect to DB
connectDB();

//Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cors());


app.use(routes);

const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}); 

