import { useState } from "react";

const UseShowAndHideElements = () => {
  const [showElement, setShowElement] = useState({
    brands: false,
    size: false,
    relatedCategory: true,
    discount: false,
    rating: false,
  });

  const handleShowElement = (elementName) => {
    setShowElement((prev) => ({
      ...prev,
      [elementName]: !prev[elementName],
    }));
  };

  return {
    showElement,
    handleShowElement,
  };
};

export default UseShowAndHideElements;
