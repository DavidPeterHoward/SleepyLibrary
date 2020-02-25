import { useState, useEffect } from "react";

export const useFetchListAndMerge = (DataObject, ListingType) => {
  const [data, setData] = useState(DataObject);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    setAllData([]);
  }, [ListingType]);

  useEffect(() => {
    setData(DataObject);
  }, [DataObject, ListingType]);

  useEffect(() => {
    setAllData(allData => [...allData, ...data]);
  }, [data]);

  return [allData];
};
