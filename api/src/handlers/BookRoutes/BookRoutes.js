const router = require("express").Router();
const createBook = require('../../controllers/Books/CreateBook')
const getAllBooks = require('../../controllers/Books/GetAllBooks')
const deleteBook = require('../../controllers/Books/DeleteBook')
const getOneBook = require('../../controllers/Books/GetOneBook')
router.post("/create",  async (req, res) => {
     try {
        const params = req.body
        const response = await createBook(params)
        res.status(200).json(response)
     } catch (error) {
        res.json({error: error.message})
     }
})

router.get('/find/:bookName', async (req, res) => {
   try {
      const bookName = req.params.bookName
      const response = await getOneBook(bookName)
      res.status(200).json(response)
   } catch (error) {
      res.status(500).json({error: error.message})
   }
})

router.get('/all', async(req, res) => {
   try {
      const response = await getAllBooks()
      res.status(200).json(response)
   } catch (error) {
      res.status(500).json({error: error.message})
   }
})


router.delete('/del', async(req, res) => {
   try {
      const {name} = req.body
      const response = await deleteBook(name)
      res.status(202).json(response)
   } catch (error) {
      res.status(500).json({error: error.message})
   }
})
module.exports = router