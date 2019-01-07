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
}

module.exports = BookDAO;