// IMPORTS
import express, {urlencoded} from 'express'
import dotenv from 'dotenv'
import chalk from 'chalk'
import morgan from 'morgan'
import helmet from "helmet";

import { todoRouter } from './routes/todo.js'

// CONFIGS
const app = express()
dotenv.config({ quiet: true })

// MIDDLEWARES
app.use(helmet())
app.use(express.json())
app.use("/avatar",express.static("public"))
app.use(morgan("tiny"))

// app.use((req,res,next)=>{
//     console.log(chalk.yellow(`${req.method} - ${req.url}`))
//     next()
// })

// ROUTE MIDDLEWARES
app.use("/todo", todoRouter)

app.listen(process.env.PORT, () => {
    console.log(chalk.yellow(`http://localhost:${process.env.PORT}`))
}
) 