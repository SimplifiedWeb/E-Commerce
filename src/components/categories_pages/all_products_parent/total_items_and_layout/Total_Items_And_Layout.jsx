import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
// import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  // handleGridView,
  // handleListView,
  handleViews,
} from "../../../../redux/slices/viewSlice";
const Total_Items_And_Layout = ({ store, handleFilterTab }) => {
  const dispatch = useDispatch();

  const [view, setView] = useState({
    list: false,
    grid: true,
  });

  const handleView = () => {
    setView((prev) => ({
      ...prev,
      list: !prev.list,
      grid: !prev.grid,
    }));

    setTimeout(() => {
      dispatch(
        handleViews({
          list: !view.list,
          grid: !view.grid,
        })
      );
    }, 100);
  };

  return (
    <>
      <div className="total_available_items bg-gray-100 flex justify-between items-center flex-wrap gap-4 p-6 sm:p-3 shadow-lg ">
        <div className="total  ">
          <span>{store?.length}</span>
          <span> items in </span>
          <span>Equipments</span>
        </div>

        <div className="differentViews flex gap-4  sm:w-full sm:justify-end sm:items-end  ">
          <button
            className="lg:hidden 2xl:hidden sm:block sm:mr-[31%]"
            onClick={handleFilterTab}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
          <div className="select">
            <select disabled>
              <option value="bestMatches">Best Matches</option>
              <option value="recommended">Recommended</option>
              <option value="highRated">High Rated</option>
            </select>
          </div>
          <button onClick={() => handleView("list-view")}>
            <FormatListBulletedOutlinedIcon />
          </button>
          <button onClick={() => handleView("grid-view")}>
            <GridViewOutlinedIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Total_Items_And_Layout;
