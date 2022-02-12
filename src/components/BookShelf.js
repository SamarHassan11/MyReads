import React from 'react'
import PropTypes from 'prop-types'

import Book from './Book'

const BookShelf = ({ shelf, books, updateBookShelf }) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelf}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        books.map(book => (
                            <li key={book.id}>
                                <Book book={book} updateBookShelf={updateBookShelf} />
                            </li>
                        ))
                    }
                </ol>
            </div>
        </div>
    )
}

BookShelf.propTypes = {
    shelf: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
}

export default BookShelf