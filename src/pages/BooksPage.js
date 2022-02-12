import React from 'react'
import PropTypes from 'prop-types'

import { BookShelves } from '../components'


const BooksPage = ({ books, updateBookShelf, showSearchPage }) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            {
                books.length ? <BookShelves books={books} updateBookShelf={updateBookShelf} /> : null
            }
            <div className="open-search">
                <button onClick={showSearchPage}>Add a book</button>
            </div>
        </div>
    )
}

BooksPage.propTypes = {
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
    showSearchPage: PropTypes.func.isRequired,
}

export default BooksPage