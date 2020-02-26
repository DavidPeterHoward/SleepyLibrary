import React, { useState } from 'react';

const EditAuthor = ({ data }) => {
  const [authorId, setAuthorId] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);

  function HandlePut(_id, first_name, last_name) {
    fetch(`/api/author/${data._id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(_id, first_name, last_name),
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
              first_name: firstName,
              last_name: lastName,
            });
          }}
        >
          <input
            type="text"
            placeholder="Author First Name"
            onChange={e => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Author Last Name"
            onChange={e => setLastName(e.target.value)}
          />
          <button type="submit" value="Submit">
            Save Edit of Author
          </button>
        </form>
      </div>
    </>
  );
};

export default EditAuthor;
