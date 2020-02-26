import { useEffect, useState } from 'react';

const useFetch = (url, LIMIT = 10) => {
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [theLimit, setTheLimit] = useState(LIMIT);
  const [theOffset, setTheOffset] = useState(0);

  const [showLoadMore, setShowLoadMore] = useState(true);

  const [theUrl, setTheUrl] = useState(url);

  function fetchMore() {
    setTheOffset(theOffset => theOffset + theLimit);
  }

  async function fetchUrl() {
    try {
      const response = await fetch(
        `/api${theUrl}?limit=${theLimit}&offset=${theOffset}`,
      );
      const result = await response.json();
      if (result) {
        if (!result.length) {
          setShowLoadMore(false);
        } else if (result.length < LIMIT) {
          setShowLoadMore(false);
        }
        result && setData(result);
      }
      setIsLoading(true);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoaded(true);
    }
  }

  useEffect(() => {
    if (theOffset > 0) {
      fetchUrl();
    }
  }, [theOffset]);

  useEffect(() => {
    setTheUrl(url);
    setTheOffset(0);
    setShowLoadMore(true);
    setIsLoaded(false);
  }, [url]);

  useEffect(() => {
    fetchUrl();
    return () => {
      setTheLimit(LIMIT);
      setTheOffset(0);
      setIsLoading(false);
    };
  }, [theUrl]);

  return [data, isLoaded, error, fetchMore, showLoadMore, isLoading];
};

export { useFetch };
