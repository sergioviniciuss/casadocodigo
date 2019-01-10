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

    app.get('/books/form', (req, res) => {
        res.marko(require('../views/books/form/form.marko'));
    });

    app.post('/books', (req, res) => {
        console.log(req.body);
        const bookDAO = new BookDAO(db);
        bookDAO.add(req.body)
            .then(res.redirect('/books'))
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