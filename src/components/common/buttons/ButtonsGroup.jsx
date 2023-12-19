import { buttonGroupPropTypes } from "../../prop-types";

const ButtonsGroup = ({ btnType, name }) => {
  return (
    <>
      <div className="buttons flex justify-center items-center my-10 text-center cursor-pointer">
        {btnType == "largeBtn" ? (
          <div className="large-button w-[200px] bg-[#db4444] text-white p-3 rounded-md hover:scale-[0.97] hover:bg-[#f00000] ">
            <button>{name}</button>
          </div>
        ) : (
          <div
            className={`small-button w-[200px] bg-[#db4444] text-white p-2 px-2 text-sm rounded-md hover:scale-[0.97] hover:bg-[#f00000]`}
          >
            <button>{name}</button>
          </div>
        )}
      </div>
    </>
  );
};

ButtonsGroup.propTypes = buttonGroupPropTypes;

export default ButtonsGroup;
