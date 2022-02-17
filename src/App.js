import React from 'react'
import { Route, Routes } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import './App.css'
import { SearchPage, BooksPage } from './pages'


class BooksApp extends React.Component {
    state = {
        books: [],
    }

    componentDidMount() {
        this.getAllBooks()
    }

    getAllBooks = () => BooksAPI.getAll().then(response => this.setState({ books: response }))

    updateBookShelf = (selectedBook, shelf) => BooksAPI.update(selectedBook, shelf).then(() => {
        this.setState(prevState => ({
            books: prevState.books.map(book => {
                if (book.id == selectedBook.id) {
                    book.shelf = shelf
                }
                return book
            })
        }))
    })

    render() {
        return (
            <div className="app">
                <Routes>
                    <Route exact path="/add-book" element={
                        <SearchPage
                            books={this.state.books}
                            updateBookShelf={this.updateBookShelf}
                        />
                    }
                    />
                    <Route exact path="/" element={
                        <BooksPage
                            books={this.state.books}
                            updateBookShelf={this.updateBookShelf}
                        />
                    }
                    />
                </Routes>
            </div>
        )
    }
}

export default BooksApp
