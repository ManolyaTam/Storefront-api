import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Get List of users')
})

router.get('/:id', (req, res) => {
    res.send(`Get user by ID`)
})

router.post('/', (req, res) => {
    res.send(`Creates a new user`)
})

export default router
