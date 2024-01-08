export const getCategoryData = (allData, category_name) => {
  const data = allData.find((item) => {
    return Object.keys(item)[0] === category_name;
  });

  return data ? data[category_name] : null;
};

// helper.jsx

export const getPaginatedData = (data, currentPage, itemsPerPage) => {
  // Ensure data is defined
  if (!data) {
    return [];
  }

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Ensure data is an array and has a slice method
  if (Array.isArray(data) && data.slice) {
    return data.slice(startIndex, endIndex);
  }

  return [];
};
