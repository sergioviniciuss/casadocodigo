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

    update(book) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                    UPDATE books SET
                    title = ?,
                    price = ?,
                    description = ?
                    WHERE id = ?
                `,
                [
                    book.title,
                    book.price,
                    book.description,
                    book.id
                ],
                (err) => {
                    if (err) {
                        console.log(err)
                        return reject('Unable to update book...')
                    }
                    return resolve();
                }
            )
        })
    }
    remove(id) {
        return new Promise((resolve, reject) => {
            this._db.run(
                'DELETE FROM books WHERE id = ?',
                [id],
                (err) => {
                    if (err) {
                        console.log(err)
                        return reject('Unable to update book...')
                    }
                    return resolve();
                }
            )
        })
    }

    findById(id) {
        return new Promise((resolve, reject) => {
            this._db.get(
                `SELECT * FROM books WHERE id = ?`,
                [id],
                (err, book) => {
                    if (err) return reject('unable to find book');
                    resolve(book);
                }
            )
        })
    }
}

module.exports = BookDAO;