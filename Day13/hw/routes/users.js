const express = require('express');
var bodyParser = require('body-parser')
const userRouter = express.Router();


userRouter.use(bodyParser.urlencoded({ extended: false }))
userRouter.use(bodyParser.json())

let users = [
    {
        "id": 1,
        "fullname": "Nguyen Huy Tuong",
        "age": 18
    },
    {
        "id": 2,
        "fullname": "Nguyen Thi Tuong",
        "age": 15
    }
]

userRouter.get('/', (req, res) => {
    res.sendStatus(200)
    res.json(users)
    console.log(res.status)
})

userRouter.get(`/:id`, (req, res) => {
    const id = req.params.id
    res.sendStatus(204)
    res.json(users.filter(item => item.id === Number.parseInt(id)))
    console.log(res.status)
})

// update
userRouter.put('/user/:id', (req, res) => {
    const id = Number.parseInt(req.params.id)
    const fullname = req.body.fullname
    const age = Number.parseInt(req.body.age)
    users = users.map(item => (item.id === Number.parseInt(id)) ? { id, fullname, age } : item)
    res.sendStatus(204)
    res.json(users)
})


//add
userRouter.post('/user', (req, res) => {
    const id = Number.parseInt(req.body.id)
    const fullname = req.body.fullname
    const age = Number.parseInt(req.body.age)
    users.push({ id, fullname, age })
    res.sendStatus(201)
    res.json(users)
})

userRouter.delete('/user/:id', (req, res) => {
    const id = Number.parseInt(req.params.id)
    users = users.filter(item => item.id !== Number.parseInt(id))
    res.sendStatus(204)
    res.json(users)

})



module.exports = userRouter;