export const getCategoryData = (allData, category_name) => {
  const data = allData.find((item) => {
    return Object.keys(item)[0] === category_name;
  });

  return data ? data[category_name] : null;
};
