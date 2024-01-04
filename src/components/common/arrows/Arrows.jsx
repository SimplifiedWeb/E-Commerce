import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Arrows = ({ onLeftClick, onRightClick }) => {
  return (
    <>
      <div className="arrows flex gap-5 mr-2">
        <button onClick={onRightClick}>
          <div className="left bg-gray-100 p-[11px] rounded-full cursor-pointer">
            <ArrowBackIcon />
          </div>
        </button>
        <button onClick={onLeftClick}>
          <div className="right bg-gray-100 p-[11px] rounded-full cursor-pointer">
            <ArrowForwardOutlinedIcon />
          </div>
        </button>
      </div>
    </>
  );
};

export default Arrows;
