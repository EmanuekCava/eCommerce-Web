import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import path from 'path'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
import './data/database/database'

app.set('port', process.env.PORT || 2100)

import productsRoute from './routes/products.routes'
import sugestionsRoute from './routes/sugestions.routes'
import usersRoute from './routes/user.routes'

app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(productsRoute)
app.use(sugestionsRoute)
app.use(usersRoute)

app.use(express.static(path.join(__dirname, "../public")))

app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
})

