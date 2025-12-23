import express from "express";
import mongoose from "mongoose";

const router = express.Router()

// new
const todoSchema = new mongoose.Schema({
    todo:{type:String, required:true},
},{timestamps:true})

const Todo = mongoose.model("Todo", todoSchema)

router.get('/', async (req, res) => {
    const todos = await Todo.find(undefined,undefined,undefined).select("_id todo createdAt updatedAt")
    res.status(200).send(todos)
})

// router.post('/', (req, res) => {
//     let randId = Math.round(Math.random() * 1000)
//     const { todo } = req.body
//     todos = [...todos, { id: randId, todo: todo }]
//     res.status(201).json(todos)
// })
//
// router.put('/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     const { todo } = req.body;
//     const founded = todos.find(t => t.id === id);
//
//     if (founded) {
//         founded.todo = todo;
//         res.status(200).json(todos);
//     } else {
//         res.status(404);
//     }
// });
//
//
router.delete ('/:id', async (req, res) => {
    const id = req.params.id
    const todo = await Todo.findByIdAndDelete(id,undefined)
    res.status(200).json(todo)
})

export { router as todoRouter }