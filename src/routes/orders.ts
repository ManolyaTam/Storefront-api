import express from 'express'
const router = express.Router()

router.get('/:id', (req, res) => {
    res.send(`Get current order for user ${req.params.id}`)
})

export default router
