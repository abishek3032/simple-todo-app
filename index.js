import express from 'express'
import dotenv from 'dotenv'
import chalk from 'chalk'

import { todoRouter } from './routes/todo.js'

const app = express()
dotenv.config({ quiet: true })

app.use(express.json())
app.use("/todo", todoRouter)

console.log("TODO APP ")

app.listen(process.env.PORT, () => {
    console.log(chalk.green(`http://localhost:${process.env.PORT}`))
}
) 