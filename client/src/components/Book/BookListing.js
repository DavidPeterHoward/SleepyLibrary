import React, { useContext } from "react";
import {
  ListingCard,
  CardContainer,
  CardContainer_Column,
  Card_Single
} from "../../shared/ListingCard.styled";

import { useFetch } from "../../utils/FetchHook";

export const BookListing = (singleBook, dispatch) => {
  return (
    <Card_Single
      key={singleBook?._id}
      onClick={() =>
        dispatch({
          data: singleBook,
          listing: "BOOK",
          type: "ShowModal",
          payload: `${singleBook?._id}`
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
  const [FullData, isLoaded, error, fetchMore, showLoadMore] = useFetch(
    `/books/${data._id}`
  );
  return (
    <div>
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
    </div>
  );
};
