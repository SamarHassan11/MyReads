import React from 'react'
import PropTypes from 'prop-types'

const Book = ({ book, updateBookShelf, isSearchPage }) => {
    const { title, shelf, authors, imageLinks } = book
    const imageLink = isSearchPage ? imageLinks && imageLinks.smallThumbnail : imageLinks && imageLinks.thumbnail

    const updateShelf = e => updateBookShelf(book, e.target.value)

    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLink})` }}></div>
                <div className="book-shelf-changer">
                    <select value={shelf} onChange={updateShelf}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            {
                authors && <div className="book-authors">{authors.join()}</div>
            }
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
    isSearchPage: PropTypes.bool,
}

Book.default = {
    isSearchPage: false,
}

export default Book