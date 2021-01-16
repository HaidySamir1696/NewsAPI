const express = require('express')
const News = require('./models/news')
const newsrouter = require('./routers/news')
require('./db/mongoose')

const app = express()

app.use(express.json())

app.use(newsrouter)

const port = 3000



app.listen(port,()=> console.log('server is running'))