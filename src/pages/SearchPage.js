import React from 'react'
import * as BooksAPI from '../BooksAPI'
import PropTypes from 'prop-types'

import { Book } from '../components'

class SearchPage extends React.PureComponent {
    state = {
        searchedBooks: []
    }

    getBooksWithShelf = response => {
        const books = response.map(searchedBook => {
            const bookInShelf = this.props.books.find(book => book.id === searchedBook.id)
            searchedBook.shelf = bookInShelf ? bookInShelf.shelf : 'none'
            return searchedBook
        })
        this.setState({ searchedBooks: books })
    }

    searchBooks = e => {
        const text = e.target.value
        if (text) {
            BooksAPI.search(text).then(response => {
                if (response instanceof Array) {
                    this.getBooksWithShelf(response)
                    return
                }
            })
        }
        this.setState({ searchedBooks: [] })
    }

    updateSearchedBookShelf = (book, shelf) => {
        this.setState(prevState => ({
            searchBooks: prevState.searchedBooks.map(searchedBook => {
                if (book.id === searchedBook.id) {
                    searchedBook.shelf = shelf
                }
                return searchedBook
            })
        }))
    }

    updateBookShelf = (book, shelf) => {
        this.updateSearchedBookShelf(book, shelf)
        this.props.updateBookShelf(book, shelf)
    }

    render() {
        const { hideSearchPage } = this.props;
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={hideSearchPage}>Close</button>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={this.searchBooks} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {
                            this.state.searchedBooks.map(book => (
                                <li key={book.id}>
                                    <Book
                                        book={book}
                                        updateBookShelf={this.updateBookShelf}
                                        isSearchPage
                                    />
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

SearchPage.propTypes = {
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
    hideSearchPage: PropTypes.func.isRequired,
}

export default SearchPage