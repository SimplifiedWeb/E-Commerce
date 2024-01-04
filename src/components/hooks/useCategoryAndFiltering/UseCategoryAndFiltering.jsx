import { useState, useEffect } from "react";

const UseCategoryAndFiltering = ({ store, data }) => {
  const [filter_Data, setFilter_Data] = useState([]);

  useEffect(() => {}, [store, data]);

  return {
    filter_Data,
  };
};

export default UseCategoryAndFiltering;
