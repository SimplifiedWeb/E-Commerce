import {
  PhoneAndroidOutlined as PhoneAndroidOutlinedIcon,
  ComputerOutlined as ComputerOutlinedIcon,
  WatchOutlined as WatchOutlinedIcon,
  CameraAltOutlined as CameraAltOutlinedIcon,
  HeadphonesOutlined as HeadphonesOutlinedIcon,
  SportsEsportsOutlined as SportsEsportsOutlinedIcon,
  CheckroomOutlined as CheckroomOutlinedIcon,
  ConstructionOutlined as ConstructionOutlinedIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Category_Cards = () => {
  return (
    <div className="category-card flex flex-wrap justify-between items-center">
      <Link to="/category/smartphones" className="icon-box">
        <PhoneAndroidOutlinedIcon className="icon line-icon" />
        <div className="icon-name">Phone</div>
      </Link>
      <Link to="/category/computerTech" className="icon-box">
        <ComputerOutlinedIcon className="icon" />
        <div className="icon-name">Computer</div>
      </Link>
      <Link to="/category/sportsOutdoors" className="icon-box">
        <WatchOutlinedIcon className="icon" />
        <div className="icon-name">Watch</div>
      </Link>
      <Link to="/category/computerTech" className="icon-box">
        <CameraAltOutlinedIcon className="icon" />
        <div className="icon-name">Camera</div>
      </Link>
      <Link to="/category/toolsEquipment" className="icon-box">
        <HeadphonesOutlinedIcon className="icon" />
        <div className="icon-name">Headphones</div>
      </Link>
      <Link to="/category/sportsOutdoors" className="icon-box">
        <SportsEsportsOutlinedIcon className="icon" />
        <div className="icon-name">Sports</div>
      </Link>
      <Link to="/category/menClothing" className="icon-box">
        <CheckroomOutlinedIcon className="icon" />
        <div className="icon-name">Checkroom</div>
      </Link>
      <Link to="/category/machineryTools" className="icon-box">
        <ConstructionOutlinedIcon className="icon" />
        <div className="icon-name">Construction</div>
      </Link>
    </div>
  );
};

export default Category_Cards;
