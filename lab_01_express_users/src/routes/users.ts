import { Router, Request, Response } from 'express'

const router = Router()

interface User {
  id: number
  username: string
  age: number
}

let users: User[] = [
  { id: 1, username: 'alex', age: 25 },
  { id: 2, username: 'john', age: 30 },
  { id: 3, username: 'mike', age: 19 },
]

router.get('/', (req: Request, res: Response) => {
  res.json(users)
})

router.get('/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)

  const user = users.find((currentUser) => currentUser.id === id)

  if (!user) {
    res.status(404).json({ message: 'User not found' })
    return
  }

  res.json(user)
})

router.post('/', (req: Request, res: Response) => {
  const { username, age } = req.body

  if (typeof username !== 'string' || username.trim() === '') {
    res.status(400).json({ message: 'Username is required' })
    return
  }

  if (typeof age !== 'number' || age <= 0) {
    res.status(400).json({ message: 'Age must be greater than 0' })
    return
  }

  const newUser: User = {
    id: users.length > 0 ? Math.max(...users.map((user) => user.id)) + 1 : 1,
    username: username.trim(),
    age,
  }

  users.push(newUser)

  res.status(201).json(newUser)
})

router.put('/:id', (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const { username, age } = req.body

  const user = users.find((currentUser) => currentUser.id === id)

  if (!user) {
    res.status(404).json({ message: 'User not found' })
    return
  }

  if (typeof username !== 'string' || username.trim() === '') {
    res.status(400).json({ message: 'Username is required' })
    return
  }

  if (typeof age !== 'number' || age <= 0) {
    res.status(400).json({ message: 'Age must be greater than 0' })
    return
  }

  user.username = username.trim()
  user.age = age

  res.json(user)
})

export default router
