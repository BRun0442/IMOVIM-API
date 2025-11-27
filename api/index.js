import express from 'express';
const app = express();

app.get("/", (req, res) => {
  res.send("FUNCIONOU! O problema era a importação.");
});

// Rota coringa para pegar qualquer coisa
app.get("*", (req, res) => {
  res.send("Rota coringa funcionando.");
});

export default app;
