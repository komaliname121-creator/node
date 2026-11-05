const express = require('express')
const app = express()
const port = 3500

app.get('/', (req, res) => {
  res.send('
           <h1>welcome vaijapur</h1>
            <h2>version 1.0.0</h2>
           ')
           })

app.listen(port,'0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})
