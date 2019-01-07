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
        db.all('SELECT * FROM books', (err, result) => {
            res.marko(
                require('../views/books/list/list.marko'),
                {
                    books: result,
                }
            );
        })
    });
}