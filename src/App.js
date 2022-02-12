import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { SearchPage, BooksPage } from './pages'


class BooksApp extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        books: [],
        showSearchPage: false
    }

    componentDidMount() {
        this.getAllBooks()
    }

    getAllBooks = () => BooksAPI.getAll().then(response => this.setState({ books: response }))

    updateBookShelf = (book, shelf) => BooksAPI.update(book, shelf).then(this.getAllBooks())

    showSearchPage = () => {
        this.setState({ showSearchPage: true });
    }

    hideSearchPage = () => {
        this.setState({ showSearchPage: false });
    }

    render() {
        return (
            <div className="app">
                {
                    this.state.showSearchPage ?
                        <SearchPage
                            hideSearchPage={this.hideSearchPage}
                        />
                        :
                        <BooksPage
                            books={this.state.books}
                            showSearchPage={this.showSearchPage}
                            updateBookShelf={this.updateBookShelf}
                        />
                }
            </div>
        )
    }
}

export default BooksApp
