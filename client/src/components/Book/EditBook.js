import React, { useState } from 'react';

const EditBook = () => {
  const [bookId, setBookId] = useState(null);
  const [bookTitle, setBookTitle] = useState(null);
  const [bookISBN, setBookISBN] = useState(null);
  const [bookAuthor, setBookAuthor] = useState(null);

  function HandlePut(name, isbn, author, bookId) {
    fetch(`/book/${bookId}`, {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(name, isbn, author),
    }).then(res => res.json());
  }

  return (
    <form
      noValidate
      autoComplete="off"
      encType={'multipart/form-data'}
      onSubmit={e => {
        e.preventDefault();
        HandlePost({
          name: bookTitle,
          isbn: bookISBN,
          author: bookAuthor,
        });
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
        placeholder="Book Author"
        onChange={e => setBookAuthor(e.target.value)}
      />
      <button type="submit" value="Submit">
        Save Book
      </button>
    </form>
  );
};

export default EditBook;
