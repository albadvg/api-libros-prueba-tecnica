const { Router } = require('express')
const { getBooks, getBook, postBook, updateBook, deleteBook } = require('../controllers/booksControllers')

const booksRouter = Router();

booksRouter.get('/', getBooks)
booksRouter.get('/:id', getBook)
booksRouter.post('/', postBook)
booksRouter.put('/:id', updateBook)
booksRouter.delete('/:id', deleteBook)

module.exports = booksRouter;