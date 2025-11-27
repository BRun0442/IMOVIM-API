import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

// Rota Raiz OBRIGATÓRIA para não dar 404 na Home
app.get("/", (req, res) => {
    return res.status(200).send("🚀 API Vercel Funcionando! O problema era configuração.");
});

// Rota de teste secundária
app.get("/ping", (req, res) => {
    return res.json({ pong: true, time: new Date() });
});

// Exportação Padrão
export default app;
