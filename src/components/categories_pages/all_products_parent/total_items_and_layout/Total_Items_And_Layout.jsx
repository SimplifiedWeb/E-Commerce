import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
const Total_Items_And_Layout = () => {
  return (
    <>
      <div className="total_available_items bg-gray-100 flex justify-between items-center flex-wrap gap-4 p-6 shadow-lg">
        <div className="total">
          <span>10</span>
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
          <button>
            <FormatListBulletedOutlinedIcon />
          </button>
          <button>
            <GridViewOutlinedIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Total_Items_And_Layout;
