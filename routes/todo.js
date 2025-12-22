import express from "express";

const router = express.Router()

let todos = []
router.get('/', (req, res) => {
    res.status(200).json(todos)
})

router.post('/', (req, res) => {
    let randId = Math.round(Math.random() * 1000)
    const { todo } = req.body
    todos = [...todos, { id: randId, todo: todo }]
    res.status(201).json(todos)
})

router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { todo } = req.body;
    const founded = todos.find(t => t.id === id);

    if (founded) {
        founded.todo = todo;
        res.status(200).json(todos);
    } else {
        res.status(404);
    }
});


router.delete('/:id', (req, res) => {
    const id = req.params.id
    todos = todos.filter((t) => t.id !== id)
    res.send(todos)
})

export { router as todoRouter }