import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { BookShelves } from '../components'


const BooksPage = ({ books, updateBookShelf }) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            {
                books.length ? <BookShelves books={books} updateBookShelf={updateBookShelf} /> : null
            }
            <div className="open-search">
                <Link to="/add-book">
                    <button>Add a book</button>
                </Link>
            </div>
        </div>
    )
}

BooksPage.propTypes = {
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
}

export default BooksPage