import React, { useEffect, useState } from "react";
import axios from "axios";

const DisplayData = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5500/allbooks")
      .then((res) => setBooks(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h3>Book List</h3>
      <ul>
        {books.map((book) => (
          <li key={book._id}>{book.booktitle} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayData;
