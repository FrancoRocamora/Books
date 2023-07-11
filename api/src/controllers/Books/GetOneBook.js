const {Book, Genre} = require('../../db')

const getOneBook = async (title) => {
    const book = await Book.findOne({where: {title: title}, include: {model: Genre}})
    return book
}


module.exports = getOneBook