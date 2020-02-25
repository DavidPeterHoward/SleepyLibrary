import React, { useState } from "react";

const CreateBook = ({ ShowModal }) => {
  const [bookTitle, setBookTitle] = useState(null);
  const [bookISBN, setBookISBN] = useState(null);
  const [bookAuthor_FirstName, setBookAuthor_FirstName] = useState(null);
  const [bookAuthor_LastName, setBookAuthor_LastName] = useState(null);

  function HandlePost(name, isbn, author) {
    fetch("/books/", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(name, isbn, author)
    }).then(res => res.json());
  }

  return (
    <form
      noValidate
      autoComplete="off"
      encType={"multipart/form-data"}
      onSubmit={e => {
        e.preventDefault();
        HandlePost({
          name: bookTitle,
          isbn: bookISBN,
          author_first_name: bookAuthor_FirstName,
          author_last_name: bookAuthor_LastName
        });
        ShowModal();
      }}
    >
      <input
        type="text"
        placeholder="Book Title"
        onChange={e => setBookTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Book ISBN"
        onChange={e => setBookISBN(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author First Name"
        onChange={e => setBookAuthor_FirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author Last Name"
        onChange={e => setBookAuthor_LastName(e.target.value)}
      />
      <button type="submit" value="Submit">
        Save Book
      </button>
    </form>
  );
};

export default CreateBook;
