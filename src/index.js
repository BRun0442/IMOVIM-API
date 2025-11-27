// src/index.js
import compression from 'compression'
import express from 'express'
import cors from 'cors'
import routes from './routes.js'
import { config } from 'dotenv'
import connect_MongoDB from './database/mongoDB.js'

config() // Inicializa variáveis de ambiente

const app = express()

// Conecta ao Banco
// Nota: Em Serverless, evitamos 'await' no topo para não bloquear a exportação do app.
// O Mongoose (se for o que você usa) gerencia o buffer de conexão automaticamente.
connect_MongoDB()

// Middlewares
app.use(express.json())
app.use(cors())
app.use(compression())

// Rotas
app.use("/", routes)

// --- LÓGICA HÍBRIDA (LOCAL vs VERCEL) ---

// Se o arquivo for executado diretamente (node src/index.js), roda o servidor localmente
// Se for importado pela Vercel, essa parte é ignorada
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3333
    app.listen(PORT, () => {
        console.log(`🔥 API rodando localmente na porta: ${PORT}`)
    })
}

// Exporta o app para a Vercel usar
export default app