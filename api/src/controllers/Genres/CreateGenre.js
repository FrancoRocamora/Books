const {Genre} = require('../../db')

const createGenre = async (genre) => {
   const newGenre =  await Genre.create({name: genre})
   return `Nuevo genero creado: ${newGenre.name}`
}

module.exports = createGenre