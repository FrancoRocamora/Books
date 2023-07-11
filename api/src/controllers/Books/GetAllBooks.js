const {Book, Genre} = require('../../db')


const getAllBooks = async() => {
    const books = await Book.findAll({include: {model: Genre}})
    return books
}

module.exports = getAllBooks