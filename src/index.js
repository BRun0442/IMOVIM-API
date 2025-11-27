import compression from 'compression'
import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'

// --- SEUS IMPORTS ---
import routes from './routes.js' 
// import connect_MongoDB from './database/mongoDB.js' // <--- MANTENHA O BANCO COMENTADO POR ENQUANTO

config()

const app = express()

// --- CONEXÃO BANCO (COMENTADA PARA TESTE) ---
// connect_MongoDB()
//     .then(() => console.log("Mongo Conectado"))
//     .catch(err => console.error(err));

app.use(express.json())
app.use(cors())
app.use(compression())

// --- ROTA DE DEBUG (IMPORTANTE) ---
app.get("/", (req, res) => {
    res.json({ 
        status: "Online 🚀", 
        message: "O SRC foi importado com sucesso!",
        env: process.env.NODE_ENV
    });
});

app.use("/", routes)

if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3333
    app.listen(PORT, () => {
        console.log(`Rodando local na porta ${PORT}`)
    })
}

export default app;
