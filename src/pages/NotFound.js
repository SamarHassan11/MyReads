import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="list-books">
        <div className="list-books-title">
            <h1>404 - Not Found!</h1>
        </div>
        <div style={{ textAlign: 'center' }}>
            <Link to="/">Go Home</Link>
        </div>
    </div>
);

export default NotFound;
