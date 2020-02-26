import React, { useState } from 'react';

const EditBook = ({ data }) => {
  const [bookTitle, setBookTitle] = useState(null);
  const [bookISBN, setBookISBN] = useState(null);

  function HandlePut(_id, name, isbn) {
    fetch(`/book/${data._id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(_id, name, isbn),
    }).then(res => res.json());
  }

  return (
    <>
      <div>
        <form
          noValidate
          autoComplete="off"
          encType={'multipart/form-data'}
          onSubmit={e => {
            e.preventDefault();
            HandlePut({
              _id: data._id,
              name: bookTitle,
              isbn: bookISBN,
            });
          }}
        >
          <input
            type="text"
            placeholder="Book First Name"
            onChange={e => setBookTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Book Last Name"
            onChange={e => setBookISBN(e.target.value)}
          />
          <button type="submit" value="Submit">
            Save Edit of Book
          </button>
        </form>
      </div>
    </>
  );
};

export default EditBook;
