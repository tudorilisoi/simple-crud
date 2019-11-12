const express = require('express')

const app = express()

app.get('/users', (req, res) => {
    res.status(200).json({})

 })
app.post('/users/create', (req, res) => { })
app.patch('/users/update', (req, res) => { })
app.delete('/users/delete', (req, res) => { })

const port = process.env.APP_PORT || 8091
app.listen(port, (err) => {
    if (err) {
        console.log(`could not start server http://localhost:${port}`)
        console.log(`ERROR:`, err)
        process.exit()
        return;
    }
    console.log(`Server listening at http://localhost:${port}`)
})
