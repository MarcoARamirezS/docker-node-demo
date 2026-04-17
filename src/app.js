import express from "express";

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (_req, res) => {
  res.json({
    ok: true,
    message: 'Hola desde Docker + Node + Express 💪'
  })
})

app.get('/saludo', (_req, res) => {
  res.json({
    ok: true,
    message: 'Ruta saludo funciona correctamente ✌️'
  })
})

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor funcionando en http://0.0.0.0:${PORT}`)
})