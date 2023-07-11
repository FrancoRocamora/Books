const {Book} = require('../../db')

const DeleteBook = async (name) => {
    const toDelete = await Book.destroy({where: {title: name}})
    return `Se borró el libro: ${name}` 
}

module.exports = DeleteBook