import S_Cards_2 from "./S_Cards_2";
import S_Cards_3 from "./S_Cards_3";
import S_Cards_4 from "./S_Cards_4";

const S_Cards = () => {
  return (
    <>
      <div className={`s_cards mr-[-15px] `}>
        <div className="join_now p-5 bg-[#f7d8ab] text-gray-800 rounded-md  m-3">
          <div className="top flex">
            <img
              src="https://bootstrap-ecommerce-web.netlify.app/images/avatars/avatar.jpg"
              alt="profile"
              height="44px"
              width="44px"
            />
            <div className="first-step ml-4">
              Hi, user <br /> lets get started.
            </div>
          </div>
          <button className="bg-[#554c3d] text-white w-full mt-3 py-1">
            Join now
          </button>
        </div>
        <S_Cards_2 />
        <S_Cards_4 />
        <S_Cards_3 />
      </div>
    </>
  );
};

export default S_Cards;
