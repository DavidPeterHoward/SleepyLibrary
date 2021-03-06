import React, { useState, useContext } from 'react';
import {
  ListingCard,
  CardContainer,
  CardContainer_Column,
  Card_Single,
} from '../../shared/ListingCard.styled';
import EditAuthor from './EditAuthor';
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
  ] = useFetch(`authors/${data._id}`);

  const HandleDeleteCheck = bool => {
    bool
      ? dispatch({
          data: data,
          listing: 'AUTHOR',
          type: 'Delete',
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
