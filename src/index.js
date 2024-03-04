const express = require('express');
const morgan = require('morgan');
const booksRouter = require('../src/routes/booksRouter')

//inicializar servidor
const app = express();

//loggear peticiones http
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//rutas
app.use('/books', booksRouter)

//escuchar puerto
app.listen(3000, ()=> {
    console.log('Servidor corriendo en el puerto 3000')
});