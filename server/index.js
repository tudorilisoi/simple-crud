const bodyParser = require('body-parser')
const express = require('express')
const dataservice = require('./dataservice')

const app = express()
app.use(bodyParser.json());

app.get('/users', async (req, res) => {
    try {
        const data = await dataservice.getUsers({})
        res.status(200).json(data)
    } catch (e) {
        res.status(500).send(e.message)
    }

})
app.post('/users/create', async (req, res) => {
    try {
        console.log(`REQ BODY`, req.body)
        await dataservice.createUser(req.body)
        res.status(201).json({})
    } catch (e) {
        res.status(500).send(e.message)
    }

})
app.patch('/users/update', async (req, res) => { })
app.delete('/users/delete/:email', async (req, res) => {
    try {
        await dataservice.deleteUser(req.params.email)
        res.status(204).json({})
    } catch (e) {
        res.status(500).send(e.message)
    }
})

const port = process.env.APP_PORT || 8091
app.listen(port, () => {
    // if (err) {
    //     console.log(`could not start server http://localhost:${port}`)
    //     console.log(`ERROR:`, err)
    //     process.exit()
    //     return;
    // }
    console.log(`Server listening at http://localhost:${port}`)
})
