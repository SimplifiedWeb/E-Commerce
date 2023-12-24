import { useState } from "react";

const LocalStorageHook = ({ LsData }) => {
  const [addData, setAddData] = useState(LsData);

  const getItem = () => {};
  const setItem = () => {};

  return addData, getItem, setItem;
};

export default LocalStorageHook;
