import dotenv from 'dotenv';
import express from "express"
import { dirname } from "path"
import { fileURLToPath } from "url"


dotenv.config();
const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.sendFile(__dirname+"/public/index.html")
})

app.get('/login', (req, res) => {
    res.send('<h1>User Trying to Login</h1>')
})

app.get('/shadow', (req, res) => {
    res.send('<h1>User is in to the Shadows</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})