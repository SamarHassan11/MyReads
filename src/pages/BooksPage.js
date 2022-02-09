import React from 'react'
import PropTypes from 'prop-types'

import { BookShelves } from '../components'


const BooksPage = ({ showSearchPage }) => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <BookShelves />
            <div className="open-search">
                <button onClick={showSearchPage}>Add a book</button>
            </div>
        </div>
    )
}

BooksPage.propTypes = {
    showSearchPage: PropTypes.func.isRequired,
}

export default BooksPage