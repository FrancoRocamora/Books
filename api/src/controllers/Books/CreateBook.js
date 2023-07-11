const {Genre, Book, Book_Genre} = require('../../db')

const createBook = async ({title, author, editorial, year, description, state, stock, genres}) => {
    const newBook = await Book.create(
       {
            title: title,
            author: author,
            editorial: editorial,
            year: year,
            description: description,
            state: state,
            stock: stock,
       }
    )
    for (let i = 0; i < genres.length; i++ ){
    const newGenre3 = await Genre.findOne({where: {name: genres[i]}})
    await newBook.addGenre(newGenre3)
    }
    const response = await Book.findAll({include: Genre})
    return  response
}

module.exports = createBook