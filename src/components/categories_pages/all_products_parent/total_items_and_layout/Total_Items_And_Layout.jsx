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
const Total_Items_And_Layout = ({ store }) => {
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
      <div className="total_available_items bg-gray-100 flex justify-between items-center flex-wrap gap-4 p-6 shadow-lg">
        <div className="total">
          <span>{store?.length}</span>
          <span> items in </span>
          <span>Equipments</span>
        </div>

        <div className="differentViews flex gap-4">
          <div className="select">
            <select>
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
