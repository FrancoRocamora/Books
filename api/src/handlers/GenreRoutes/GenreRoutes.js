const router = require('express').Router()
const CreateGenre = require('../../controllers/Genres/CreateGenre')

router.post('/createGenre', async(req, res) => {
    try {
        const {name} = req.body
        const information = await CreateGenre(name)
        res.status(201).json(information)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

module.exports = router