// IMPORTS
import express, {urlencoded} from 'express'
import dotenv from 'dotenv'
import chalk from 'chalk'
import morgan from 'morgan'
import helmet from "helmet";
import mongoose from "mongoose";

// ROUTE IMPORTS
import { todoRouter } from './routes/todo.js'

// CONFIGS
const app = express()
dotenv.config({ quiet: true })
mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DATABASE CONNECTED!")).catch((err)=>console.log(err))

// MIDDLEWARES
app.use(helmet())
app.use(express.json())
app.use("/avatar",express.static("public"))
app.use(morgan("tiny"))

// ROUTE MIDDLEWARES
app.use("/todo", todoRouter)

app.listen(process.env.PORT, () => {
    console.log(chalk.yellow(`http://localhost:${process.env.PORT}`))
}
) 