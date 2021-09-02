const express = require('express')
const app = express()
const port = 3000
const NAME = process.env.NAME || "World"

app.get('/', (req, res) => {
  res.send('Hello ' + NAME + '!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
