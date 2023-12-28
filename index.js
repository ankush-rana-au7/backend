require('dotenv').config()
const express = require('express')
const app = express()
// const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Ankush Rana!')
})

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`)
})