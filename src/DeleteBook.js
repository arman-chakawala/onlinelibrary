import React from "react";
import axios from "axios";

const DeleteBook = ({ match }) => {
  const handleDelete = () => {
    axios.post(`http://localhost:5500/deleteBook/${match.params.id}`)
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <h3>Delete Book</h3>
      <button onClick={handleDelete}>Confirm Delete</button>
    </div>
  );
};

export default DeleteBook;
