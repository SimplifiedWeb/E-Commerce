import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import CheckroomOutlinedIcon from "@mui/icons-material/CheckroomOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";

// eslint-disable-next-line react/prop-types
const Category_Cards = () => {
  return (
    <>
      <div className="flex w-full h-full  justify-between items-center flex-wrap ">
        <div className="icon-box ">
          <PhoneAndroidOutlinedIcon className="icon" />
          <div className="icon-name">Phone</div>
        </div>
        <div className="icon-box">
          <ComputerOutlinedIcon className="icon" />
          <div className="icon-name">Computer</div>
        </div>
        <div className="icon-box">
          <WatchOutlinedIcon className="icon" />
          <div className="icon-name">Watch</div>
        </div>
        <div className="icon-box">
          <CameraAltOutlinedIcon className="icon" />
          <div className="icon-name">Camera</div>
        </div>
        <div className="icon-box">
          <HeadphonesOutlinedIcon className="icon" />
          <div className="icon-name">Headphones</div>
        </div>
        <div className="icon-box">
          <SportsEsportsOutlinedIcon className="icon" />
          <div className="icon-name">Sports</div>
        </div>
        <div className="icon-box">
          <CheckroomOutlinedIcon className="icon" />
          <div className="icon-name">Checkroom</div>
        </div>
        <div className="icon-box">
          <ConstructionOutlinedIcon className="icon" />
          <div className="icon-name">Construction</div>
        </div>
      </div>
    </>
  );
};

export default Category_Cards;
