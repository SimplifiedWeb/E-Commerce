import { Link } from "react-router-dom";
import S_Cards_2 from "./S_Cards_2";
import S_Cards_3 from "./S_Cards_3";
import S_Cards_4 from "./S_Cards_4";

const S_Cards = () => {
  return (
    <div className="s_cards flex flex-wrap justify-center ">
      <div className="join_now p-4 bg-[#f7d8ab] text-gray-800 rounded-md  flex flex-col items-center md:items-start md:w-64">
        <div className="top flex items-center mb-2">
          <img
            src="https://bootstrap-ecommerce-web.netlify.app/images/avatars/avatar.jpg"
            alt="profile"
            className="h-11 w-11 rounded-full"
          />
          <div className="first-step ml-4">
            Hi, user <br /> let's get started.
          </div>
        </div>
        <Link to="/register">
          <button className="bg-[#554c3d]  text-white w-[180px] py-2 rounded">
            Join now
          </button>
        </Link>
      </div>
      <S_Cards_2 />
      <S_Cards_4 />
      <S_Cards_3 />
    </div>
  );
};

export default S_Cards;
