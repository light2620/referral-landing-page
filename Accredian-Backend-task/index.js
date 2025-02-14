import express from "express"
import dotenv from "dotenv"
import { PrismaClient } from "@prisma/client";
import cors from 'cors'
import { sendReferral } from "./Controller/sendReferral.controller.js";
dotenv.config();

const app = express()


app.use(express.json());
app.use(cors());

app.get("/",(req,res)=> {
    res.send("api is running")
})


app.post("/referrals",sendReferral)

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log("server is running on ", PORT);
})
