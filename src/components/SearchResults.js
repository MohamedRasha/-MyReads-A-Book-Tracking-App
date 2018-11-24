import React from "react";
import Book from "./Book";

function SearchResults(props) {
  let resultedBooks = props.books;
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {//Check if the search return any result. If so start mapping the array.
        resultedBooks.length > 0 &&
          //filter only the books that has covers to display.
          resultedBooks
            .filter(book => book.imageLinks !== undefined)
            .map(book => (
              <li key={book.id}>
                <Book
                  cover={book.imageLinks.thumbnail}
                  title={book.title}
                  authors={book.authors}
                  bookId={book.id}
                  book={book}
                  changeShelf={props.changeShelf}
                  shelf={book.shelf}
                />
              </li>
            ))}
      </ol>
    </div>
  );
}

export default SearchResults;
