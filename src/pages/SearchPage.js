import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { debounce } from 'lodash'

import * as BooksAPI from '../BooksAPI'
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

    searchAllBooks = text => {
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

    search = debounce(this.searchAllBooks, 1000)

    handleSearchInput = ({ target: { value } }) => this.search(value)

    updateBookShelf = (book, shelf) => {
        this.setState(prevState => ({
            searchBooks: prevState.searchedBooks.map(searchedBook => {
                if (book.id === searchedBook.id) {
                    searchedBook.shelf = shelf
                }
                return searchedBook
            })
        }))
        this.props.updateBookShelf(book, shelf)
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={this.handleSearchInput}
                        />
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
}

export default SearchPage