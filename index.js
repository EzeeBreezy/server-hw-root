const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`)
})

app.listen(3000, '0.0.0.0', () => {
    console.log("Express server started at http://0.0.0.0:3000")
})