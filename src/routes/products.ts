import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Get List of products')
})

router.get('/:id', (req, res) => {
    res.send(`Get product by ID`)
})

router.post('/', (req, res) => {
    res.send(`Creates a new product`)
})

export default router
