
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
        res.marko(
            require('../views/books/list/list.marko'),
            {
                books: [
                    {
                        id: 1,
                        title: "Node Fundamentals"
                    },
                    {
                        id: 2,
                        title: "Node Advanced concepts"
                    }
                ]
            }
        );
    });
}