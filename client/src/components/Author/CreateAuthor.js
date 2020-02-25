import React, { useState } from 'react';

const CreateAuthor = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);

  function HandlePost(first_name, last_name) {
    fetch('/author/', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(first_name, last_name),
    }).then(res => res.json());
  }

  return (
    <>
      <form
        noValidate
        autoComplete="off"
        encType={'multipart/form-data'}
        onSubmit={e => {
          e.preventDefault();
          HandlePost({
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
          Save Author
        </button>
      </form>
    </>
  );
};

export default CreateAuthor;
