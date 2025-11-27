import compression from 'compression'
import express from 'express'
import cors from 'cors'
import routes from './routes.js' // Garanta que routes.js está na mesma pasta (src)
import { config } from 'dotenv'
//import connect_MongoDB from './database/mongoDB.js' // Aponta para src/database

config()

const app = express()

// Conexão sem await no topo
//connect_MongoDB()
//    .then(() => console.log("Mongo Conectado"))
//    .catch(err => console.error(err));

app.use(express.json())
app.use(cors())
app.use(compression())

app.use("/", routes)

// Só roda o listen se for local
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3333
    app.listen(PORT, () => {
        console.log(`Running locally on ${PORT}`)
    })
}

export default app
