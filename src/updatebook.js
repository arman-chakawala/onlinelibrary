import React, { useState, useEffect } from "react";
import axios from "axios";

const BookUpdate = ({ match }) => {
  const [book, setBook] = useState({
    booktitle: "",
    author: "",
    formate: "",
    Topic: "",
    PubYear: 1990,
  });

  useEffect(() => {
    axios.get(`http://localhost:5500/getbook/${match.params.id}`)
      .then((res) => setBook(res.data))
      .catch((err) => console.error(err));
  }, [match.params.id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:5500/updatebook/${match.params.id}`, book)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Update Book</h3>
      <input name="booktitle" value={book.booktitle} onChange={handleChange} />
      <input name="author" value={book.author} onChange={handleChange} />
      <input name="formate" value={book.formate} onChange={handleChange} />
      <input name="Topic" value={book.Topic} onChange={handleChange} />
      <input name="PubYear" type="number" value={book.PubYear} onChange={handleChange} />
      <button type="submit">Update Book</button>
    </form>
  );
};

export default BookUpdate;
