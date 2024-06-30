require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const mainRouter = require('./routes/main')
const ErrorHandlerMiddleware = require('./middleware/error-handaler')
const NotFoundMiddleware = require('./middleware/not-found')

app.use(express.json())
app.use('/api/v1' , mainRouter)

app.use(ErrorHandlerMiddleware)
app.use(NotFoundMiddleware)

const port = process.env.PORT || 3000

const start = async() => {
    try {
        app.listen(port , console.log(`Server is listening on ${port}...`))
    } catch (error) {
        console.log(error);
    }
}

start()