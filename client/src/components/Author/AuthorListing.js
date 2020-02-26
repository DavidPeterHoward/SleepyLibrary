import React, { useState, useContext } from 'react';
import {
  ListingCard,
  CardContainer,
  CardContainer_Column,
  Card_Single,
} from '../../shared/ListingCard.styled';
import {
  ActionProvider,
  StateContext,
  DispatchContext,
} from '../../action-context';
import { useFetch } from '../../utils/FetchHook';

export const AuthorListing = (singleAuthor, dispatch) => {
  return (
    <Card_Single
      key={singleAuthor?._id}
      onClick={() =>
        dispatch({
          data: singleAuthor,
          listing: 'AUTHOR',
          type: 'ShowModal',
          payload: `${singleAuthor?._id}`,
        })
      }
    >
      {AuthorFragment(singleAuthor, dispatch)}
    </Card_Single>
  );
};

const AuthorFragment = data => {
  return (
    <>
      {/* <p>{data?._id}</p> */}
      <h4>Author:</h4>
      <p>{data?.first_name}</p>
      <p>{data?.last_name}</p>
    </>
  );
};

export const AuthorSingleItem = data => {
  const [showDeleteCheck, setShowDeleteCheck] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const dispatch = useContext(DispatchContext);
  const [
    FullData,
    isLoaded,
    error,
    fetchMore,
    showLoadMore,
  ] = useFetch(`/authors/${data._id}`);

  const HandleDeleteCheck = bool => {
    bool
      ? dispatch({
          data: data,
          listing: 'AUTHOR',
          type: 'Edit',
          payload: `${data?._id}`,
        })
      : setShowDeleteCheck(!showDeleteCheck);
  };

  const HandleEdit = bool => {
    bool
      ? dispatch({
          data: data,
          listing: 'AUTHOR',
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
      {showEdit && <EditAuthor data={data} />}
      {showDeleteCheck ? (
        <CheckBeforeDelete HandleDeleteCheck={HandleDeleteCheck} />
      ) : isLoaded && FullData._id ? (
        <>
          <p>First Name: {FullData?.first_name}</p>
          <p>Last Name: {FullData?.last_name}</p>
          <br />
          <b>BOOKS:</b>
          <div>
            {FullData?.books?.map(book => {
              return (
                <div key={book?._id}>
                  <p>{book?._id}</p>
                  <p>{book?.name}</p>
                  <p>{book?.isbn}</p>
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

const EditAuthor = ({ data }) => {
  const [authorId, setAuthorId] = useState(null);
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);

  function HandlePut(_id, first_name, last_name) {
    fetch(`/author/${data._id}`, {
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
