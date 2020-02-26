import React, { useState, useEffect, useContext, memo } from 'react';
import styled, { css } from 'styled-components/macro';
import { useFetch } from '../../utils/FetchHook';
import { BookListing } from '../Book/BookListing';
import { AuthorListing } from '../Author/AuthorListing';
import Transition from '../../utils/Transition';
import Skeleton from '../../utils/Skeleton/Skeleton';

import Button from '../_common/button/Button';
import {
  ListingCard,
  CardContainer,
  CardContainer_Column,
  ListingTitle,
  Card_Single,
} from '../../shared/ListingCard.styled';
import { useFetchListAndMerge } from '../../utils/FetchListAndMergeHook';
import {
  ActionProvider,
  StateContext,
  DispatchContext,
} from '../../action-context';

export const List = ({
  data,
  isLoaded,
  error,
  listingType,
  dispatch,
}) => {
  if (!isLoaded) return `Loading...`;
  if (error) return `Error! ${error.message}`;
  if (!data) return <div>There isn't any data here!</div>;

  return (
    <CardContainer_Column>
      {listingType === 'books' &&
        isLoaded &&
        data?.map(singleListing =>
          BookListing(singleListing, dispatch),
        )}
      {listingType === 'authors' &&
        isLoaded &&
        data?.map(singleListing =>
          AuthorListing(singleListing, dispatch),
        )}
    </CardContainer_Column>
  );
};

const ListingTypeHeader = ({ listingType }) => {
  return (
    <ListingTitle>
      <span role="img" aria-label={`${listingType} Catalogue`}>
        {listingType === 'authors' && <>✍️</>}
        {listingType === 'books' && <>📚</>}
      </span>
      {listingType}
    </ListingTitle>
  );
};

export const Listing = ({ listingType }) => {
  const LIMIT = 5;
  const dispatch = useContext(DispatchContext);

  const [allData, setAllData] = useState([]);
  const [showAnimateLoad, setShowAnimateLoad] = useState(false);

  useEffect(() => {
    setShowAnimateLoad(true);
  }, [listingType]);

  const [
    data,
    isLoaded,
    error,
    fetchMore,
    showLoadMore,
    isLoading,
  ] = useFetch(`${listingType}/`, LIMIT);

  const [result] = useFetchListAndMerge(data, listingType);

  useEffect(() => {
    result && setAllData(result);
  }, [result]);

  return (
    <div key={listingType}>
      <Transition show={showAnimateLoad}>
        {<ListingTypeHeader listingType={listingType} />}
        {!isLoaded && <Skeleton loopCount={LIMIT} />}

        {allData && isLoaded && (
          <>
            <List
              key={listingType}
              data={allData}
              isLoaded={isLoaded}
              error={error}
              listingType={listingType}
              dispatch={dispatch}
            />
          </>
        )}
        <div style={{ margin: '1rem' }}>
          {isLoaded && showLoadMore ? (
            <Button onClick={() => fetchMore()}>Load More!</Button>
          ) : null
          // isLoaded && <p>No more data...</p>
          }
        </div>
      </Transition>
    </div>
  );
};

export default Listing;
