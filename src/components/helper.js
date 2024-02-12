export const getCategoryData = (allData, category_name) => {
  const data =
    allData &&
    allData.find((item) => {
      return Object.keys(item)[0] === category_name;
    });

  return data ? data[category_name] : null;
};

export const getPaginatedData = (data, currentPage, itemsPerPage) => {
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

export const getAllData = (allData) => {
  if (!allData) return;

  const data = allData.map((item) => {
    const values = Object.values(item);
    const mergeData = values.flat(2);
    return mergeData;
  });

  const operation = data.map((item) => item);
  const finalData = operation.flat();

  return finalData;
};
export const getInnerData = (data) => {
  if (!data) return "data is undefined";

  const convertedData = data.map((item) => {
    return item.productData?.map((product) => ({ ...product }));
  });

  const flatted = [].concat(...convertedData);
  return flatted;
};

export const getProductData = (data) => {
  if (!data) return "data is undefined from getProductData";

  const firstStep = data.map((item) => item.productData);
  // console.log(firstStep);
  const secondStep = [].concat(...firstStep);
  // console.log(secondStep);
  return secondStep;
};
