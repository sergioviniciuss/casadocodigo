let booksTable = document.querySelector('#books');
booksTable.addEventListener('click', (e) => {
    let clickedElement = e.target;
    if (clickedElement.dataset.type === 'remove') {
        let bookId = clickedElement.dataset.ref;
        fetch(`http://localhost:3000/books/${bookId}`, { method: 'DELETE'})
        .then(resp => {
            let tr = clickedElement.closest(`#book_${bookId}`);
            tr.remove();
        })
        .catch(err => console.log(err));
    }
})