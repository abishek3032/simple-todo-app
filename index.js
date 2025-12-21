import express from 'express'
import dotenv from 'dotenv'

import { todoRouter } from './routes/todo.js'

const app = express()
dotenv.config({ quiet: true })

app.use(express.json())
app.use("/todo", todoRouter)

app.listen(process.env.PORT, () => {
    console.log(`http://localhost:${process.env.PORT}`)
}
) 