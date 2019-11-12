const bodyParser = require('body-parser')
const express = require('express')
const dataservice = require('./dataservice')

const app = express()
app.use(bodyParser.json());

function expressTryCatchWrapper(fn) {
    return async function (req, resp) {
        try {
            await fn(req, resp)
        } catch (ex) {
            console.error('expressTryCatch ERROR', ex)
            resp.status(500).json({
                message: 'SERVER_ERROR',
                info: ex.toString()
            })
        }
    }
}

app.get('/users', expressTryCatchWrapper(async (req, res) => {
    const data = await dataservice.getUsers({})
    res.status(200).json(data)
}))

app.post('/users/create', expressTryCatchWrapper(async (req, res) => {
    console.log(`REQ BODY`, req.body)
    await dataservice.createUser(req.body)
    res.status(201).json({})
}))

app.patch('/users/update/:email', async (req, res) => { })
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
