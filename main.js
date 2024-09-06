const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{
    res.send('<h1>Home...</h1>')
});

app.get('/api', (req, res) =>{
    res.send('<h1>/API...</h1>')
});

app.get('/admin', (req, res) =>{
    res.send('<h1>/ADMIN...</h1>')
});

app.listen(port)