import React, { useState, useContext } from 'react';
import { Card_Single } from '../../shared/ListingCard.styled';
import { useFetch } from '../../utils/FetchHook';
import {
  ActionProvider,
  StateContext,
  DispatchContext,
} from '../../action-context';

export const BookListing = (singleBook, dispatch) => {
  return (
    <Card_Single
      key={singleBook?._id}
      onClick={() =>
        dispatch({
          data: singleBook,
          listing: 'BOOK',
          type: 'ShowModal',
          payload: `${singleBook?._id}`,
        })
      }
    >
      {/* <p>ID: {singleBook?._id}</p> */}
      <p>Name: {singleBook?.name}</p>
      <p>ISBN: {singleBook?.isbn}</p>
    </Card_Single>
  );
};

export const BookSingleItem = data => {
  const [showDeleteCheck, setShowDeleteCheck] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const dispatch = useContext(DispatchContext);
  const [
    FullData,
    isLoaded,
    error,
    fetchMore,
    showLoadMore,
  ] = useFetch(`/books/${data._id}`);

  const HandleDeleteCheck = bool => {
    bool
      ? dispatch({
          data: data,
          listing: 'BOOK',
          type: 'Delete',
          payload: `${data?._id}`,
        })
      : setShowDeleteCheck(!showDeleteCheck);
  };

  const HandleEdit = bool => {
    bool
      ? dispatch({
          data: data,
          listing: 'BOOK',
          type: 'Edit',
          payload: `${data?._id}`,
        })
      : setShowEdit(!showEdit);
  };

  return (
    <div>
      <div>
        <button onClick={() => setShowDeleteCheck(!showDeleteCheck)}>
          DELETE
        </button>{' '}
        | <button onClick={() => setShowEdit(!showEdit)}>EDIT</button>
      </div>
      {showEdit && <EditBook data={data} />}
      {showDeleteCheck ? (
        <CheckBeforeDelete HandleDeleteCheck={HandleDeleteCheck} />
      ) : isLoaded && FullData._id ? (
        <>
          <p>ID: {FullData?._id}</p>
          <p>Name: {FullData?.name}</p>
          <p>ISBN: {FullData?.isbn}</p>
          <br />
          <b>AUTHORS:</b>
          <div>
            {FullData?.authors?.map(author => {
              return (
                <div key={author?._id}>
                  <p>{author?._id}</p>
                  <p>{author?.first_name}</p>
                  <p>{author?.last_name}</p>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

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

const CheckBeforeDelete = props => {
  const { HandleDeleteCheck } = props;

  const HandleChecker = (e, bool) => {
    HandleDeleteCheck(bool);
  };

  return (
    <>
      <div>Deleting is permanent, are you sure?</div>
      <div>
        <button onClick={e => HandleChecker(e, true)}>Yes</button>
        <button onClick={e => HandleChecker(e, false)}>No</button>
      </div>
    </>
  );
};
