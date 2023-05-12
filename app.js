const express = require('express')
const cors = require('cors')

const routes = require('./src/routes/index')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json({ extended: true })); //parse data
app.use(express.urlencoded({ extended: true })); //parse data
app.use("/", routes);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})