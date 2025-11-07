import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv"
// import errorHandler from "./middlewares/error";

const app = express ();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/health", (req,res)=>{
    return res.json({"ok": true})
})

app.listen(3000, ()=>{
    console.log("Server started listening at 3000");
})
