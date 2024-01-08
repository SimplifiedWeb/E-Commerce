import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { resetFilters } from "../../../../redux/slices/filterSlice";
import {
  resetFilters,
  generateFilter,
  applyAllFilter,
} from "../../../../redux/slices/filterSlice";

const Filter_Indicator = ({ store }) => {
  const dispatch = useDispatch();

  const filterOptions = useSelector(
    (state) => state.filterSlice.allFilterOptions
  );

  const handleRemoveFilter = (selectedName) => {
    // Dispatch generateFilter to remove the selectedName from allFilterOptions
    dispatch(generateFilter({ selectedName }));

    // After a short delay, dispatch applyAllFilter with the updated state
    setTimeout(() => {
      dispatch(applyAllFilter(store));
    }, 100);
  };

  const handleRemoveAllFilter = () => {
    setTimeout(() => {
      dispatch(resetFilters([]));
    }, 100);
  };
  // console.log(filterOptions);
  return (
    <>
      <div className="main p-[13px] flex items-center gap-2 flex-wrap">
        {filterOptions?.map((currElm, index) => {
          return (
            <div
              key={index}
              className="badge w-[fit-content] px-5 py-2 bg-[#e9ecef] rounded-2xl flex items-center justify-center gap-3"
            >
              <span>{currElm}</span>
              <button onClick={() => handleRemoveFilter(currElm)}>
                <CloseOutlinedIcon style={{ fontSize: "19px" }} />
              </button>
            </div>
          );
        })}
        {filterOptions?.length > 0 && (
          <button
            className="text-red-600 hover:underline"
            onClick={handleRemoveAllFilter}
          >
            Clear all filter
          </button>
        )}
      </div>
    </>
  );
};

export default Filter_Indicator;
