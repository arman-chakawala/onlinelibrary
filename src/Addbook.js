import React, { useState } from "react";
import axios from "axios";

const AddBook = () => {
  const [book, setBook] = useState({
    booktitle: "",
    author: "",
    formate: "",
    Topic: "",
    PubYear: 1990,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5500/addbooks", book)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add a New Book</h3>
      <input name="booktitle" placeholder="Book Title" onChange={handleChange} />
      <input name="author" placeholder="Author" onChange={handleChange} />
      <input name="formate" placeholder="Format" onChange={handleChange} />
      <input name="Topic" placeholder="Topic" onChange={handleChange} />
      <input name="PubYear" type="number" placeholder="Publication Year" onChange={handleChange} />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBook;
