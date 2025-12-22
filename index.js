import express, {urlencoded} from 'express'
import dotenv from 'dotenv'
import chalk from 'chalk'

import { todoRouter } from './routes/todo.js'

const app = express()
dotenv.config({ quiet: true })

app.use(express.json())
// app.use(urlencoded({ extended: true }))
app.use((req,res,next)=>{
    console.log(chalk.yellow(`${req.method} - ${req.url}`))
    next()
})

app.use("/todo", todoRouter)

app.listen(process.env.PORT, () => {
    console.log(chalk.yellow(`http://localhost:${process.env.PORT}`))
}
) 