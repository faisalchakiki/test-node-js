const express = require('express')
const cors = require('cors')

const routes = require('./src/routes/index')

const app = express()
const port = 3000

app.use(cors())
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(port, () => {
  console.log(`App Listening on ${port}`)
})