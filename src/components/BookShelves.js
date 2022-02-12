import React from 'react'
import PropTypes from 'prop-types'

import BookShelf from './BookShelf';


const BookShelves = ({ books, updateBookShelf }) => {
    const categorizedBooks = {}
    books.forEach(book => {
        categorizedBooks[book.shelf] = categorizedBooks[book.shelf] ? [...categorizedBooks[book.shelf], book] : [book]
    })

    return (
        <div className="list-books-content">
            <div>
                {
                    Object.keys(categorizedBooks).map(shelf => (
                        <BookShelf
                            key={shelf + categorizedBooks[shelf].length}
                            shelf={shelf}
                            books={categorizedBooks[shelf]}
                            updateBookShelf={updateBookShelf}
                        />
                    ))
                }
            </div>
        </div>
    )
}

BookShelves.propTypes = {
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
}

export default BookShelves