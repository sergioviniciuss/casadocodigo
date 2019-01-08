class BookDAO {
    constructor(db) {
        this._db = db;
    }

    list() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM books',
                (err, res) => {
                    if (err) return reject('unable to resolve query');
                    resolve(res);
                }
            )

        })
    }

    add(book) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                INSERT INTO books (
                    title,
                    price,
                    description
                ) values (?, ?, ?)`,
                [
                    book.title,
                    book.price,
                    book.description
                ],
                (err) => {
                    if (err) {
                        console.log(err)
                        return reject('Unable to save book into database...')
                    }
                    return resolve();
                }
            );
        })
    }
}

module.exports = BookDAO;