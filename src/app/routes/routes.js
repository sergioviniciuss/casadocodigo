const BookDAO = require('../infra/book-dao');
const db = require('../../config/database');

module.exports = app => {
    app.get('/', (req, res) => {
        res.send(`
        <html>
            <head>
            <meta charset="utf-8">
            </head>
            <body>
            <h1> It works!</h1>
            </body>
        </html>
        `);
    });

    app.get('/books', (req, res) => {
        const bookDAO = new BookDAO(db);
        bookDAO.list()
            .then(books => res.marko(
                    require('../views/books/list/list.marko'),
                    {
                        books,
                    }
                )
            )
            .catch(err => console.log(err));
    });

    app.get('/books/form', (req, res) => {res.marko(
            require('../views/books/form/form.marko'),
            { book: {} }
        );
    });

    app.post('/books', (req, res) => {
        console.log(req.body);
        const bookDAO = new BookDAO(db);
        bookDAO.add(req.body)
            .then(res.redirect('/books'))
            .catch(err => console.log(err));
    })

    app.put('/books', (req, res) => {
        console.log(req.body);
        const bookDAO = new BookDAO(db);
        bookDAO.update(req.body)
            .then(res.redirect('/books'))
            .catch(err => console.log(err));
    })

    app.get('/books/form/:id',(req, res) => {
        const id = req.params.id;
        const bookDAO = new BookDAO(db);
        bookDAO.findById(id)
            .then(book => {
                console.log(book);
                res.marko(
                require('../views/books/form/form.marko'),
                { book }
            )})
            .catch(err => console.log(err));
    })

    app.delete('/books/:id', (req, res) => {
        const id = req.params.id;
        const bookDAO = new BookDAO(db);
        bookDAO.remove(id)
        .then(() => res.status(200).end())
        .catch(err => console.log(err));
    })
}