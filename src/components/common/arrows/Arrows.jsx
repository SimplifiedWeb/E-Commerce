import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Arrows = () => {
  return (
    <>
      <div className="arrows flex gap-5 mr-2">
        <div className="left bg-gray-100 p-[11px] rounded-full cursor-pointer">
          <ArrowBackIcon />
        </div>
        <div className="right bg-gray-100 p-[11px] rounded-full cursor-pointer">
          <ArrowForwardOutlinedIcon />
        </div>
      </div>
    </>
  );
};

export default Arrows;
