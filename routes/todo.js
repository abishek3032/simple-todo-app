import express from "express";
import mongoose from "mongoose";

const router = express.Router()

const todoSchema = new mongoose.Schema({
    todo:{type:String, required:true},
},{timestamps:true})

const Todo = mongoose.model("Todo", todoSchema)

router.get('/', async (req, res) => {
    const todos = await Todo.find(undefined,undefined,undefined).select("_id todo createdAt updatedAt")
    res.status(200).send(todos)
})

router.get('/:id', async (req,res)=>{
    const id = req.params.id
    const todos = await Todo.findById(id,undefined,undefined).select("_id todo createdAt updatedAt")
    res.status(200).send(todos)
})

router.post('/', async (req, res) => {
    const { todo } = req.body
    try {
        const newTodo = new Todo({ todo:todo })
        await newTodo.save()
        return res.status(201).send({ response: "created" })
    } catch (e) {
        console.error(e)
        return res.status(400).send({ error: e.message })
    }
})


router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const { todo } = req.body;

    try{
        const updatedTodo = await  Todo.findByIdAndUpdate({_id:id},{todo:todo},{new:true})
        return res.status(200).send({updatedTodo})
    }catch (e) {
        console.error(e)
        return res.status(400).send({error:e.message})
    }
});


router.delete ('/:id', async (req, res) => {
    const id = req.params.id
    const todo = await Todo.findByIdAndDelete(id,undefined)
    res.status(200).json(todo)
})

export { router as todoRouter }