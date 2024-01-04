const FilterSection = ({ categoryType, store, onFilterChange }) => {
  const uniqueValues = [
    ...new Set(store.map((currElm) => currElm[categoryType])),
  ];

  return (
    <div className="mb-4">
      {uniqueValues.length > 0 &&
        uniqueValues.map((currElm, index) => (
          <div className="flex items-center mb-2" key={index}>
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox text-blue-500"
                onChange={() => onFilterChange(currElm, index, categoryType)}
              />
              <span className="ml-2 text-sm">{currElm}</span>
            </label>
          </div>
        ))}
    </div>
  );
};

export default FilterSection;
