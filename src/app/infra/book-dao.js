class BookDAO {
    constructor(db) {
        this._db = db;
    }

    list(callback) {
        this._db.all(
            'SELECT * FROM books',
            (err, res) => callback(err, res)
        )
    }
}

module.exports = BookDAO;