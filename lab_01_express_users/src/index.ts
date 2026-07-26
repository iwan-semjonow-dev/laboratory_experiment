import express from 'express'
import usersRouter from './routes/users'

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/users', usersRouter)

app.get('/', (req, res) => {
  res.json({
    message: 'Server is working',
  })
})

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
})
