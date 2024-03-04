const { db, where, set } = require('../firebase')
const booksCol = db.collection('libros')


//obtener todos los libros
const getBooks = async (req, res) => {
    const response = await booksCol.get();

    const books = response.docs.map(doc => ({
        id : doc.id,
        ...doc.data()
    }));

    res.send(books);
}

//obtener un libro por su id
const getBook = async (req, res) => {
    const id = req.params.id;
    const response = await booksCol.doc(id).get();
    res.send(response.data());
}

//crear libro
const postBook = async(req, res) =>  {
    const newBook = await booksCol.add(req.body);
    res.send(newBook);
}   

//modificar libro
const updateBook = async (req, res) => {
    const id = req.params.id;
    const updatedBook = await booksCol.doc(id).update(req.body);
    res.send(updatedBook);
}

//eliminar libro
const deleteBook = async (req, res) => {
    const id = req.params.id;
    const deletedBook = await booksCol.doc(id).delete();
    res.send(deletedBook);
}

module.exports = {
    getBooks,
    getBook,
    postBook,
    updateBook,
    deleteBook
}