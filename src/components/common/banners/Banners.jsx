import { bannersPropTypes } from "../../prop-types";

const Banners = ({ imagePath }) => {
  return (
    <>
      <div className="ban p-5 cursor-pointer">
        <img
          src={`/images/${imagePath}.png`}
          alt={`${imagePath}`}
          className="object-contain hover:scale-[0.99] "
          title="go on product"
        />
      </div>
    </>
  );
};

Banners.propTypes = bannersPropTypes;

export default Banners;
