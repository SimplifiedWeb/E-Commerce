import { useState } from "react";
// import {
//   Magnifier,
//   GlassMagnifier,
//   SideBySideMagnifier,
//   PictureInPictureMagnifier,
//   MOUSE_ACTIVATION,
//   TOUCH_ACTIVATION,
// } from "react-image-magnifiers";

const Single_Product_Image = ({ findSpecificData }) => {
  const { image, otherImages, offers, product_name } = findSpecificData;
  // const [isLargeImage, setIsLargeImage] = useState()
  const [isHover, setIsHover] = useState();

  const handleImageHover = (elm) => {
    setIsHover(elm);
  };

  return (
    <>
      <div className="image w-[500px] sm:w-[100%]  flex flex-col justify-center items-center sm:mb-[50%] sm:overflow-hidden">
        <div className="relative group z-[999] sm:mt-[0%] sm:ml-[25%] sm:mr-[5%]">
          <img
            src={isHover || image}
            alt={product_name || "error"}
            className="w-[600px] h-[300px]  object-center object-contain transition-transform transform-gpu group-hover:scale-110"
          />
          <div className="absolute inset-0  bg-opacity-30 opacity-0 transition-opacity group-hover:opacity-100"></div>
        </div>

        {otherImages && otherImages.length > 0 && (
          <div className="other-images flex flex-col border-[0.5px] shadow-sm border-gray-100 gap-2 absolute top-[-5%] left-[-25%] sm:flex sm:left-0 sm:top-0 sm:mt-[10%] sm:w-[20%] sm:gap-0  ">
            <div className={` first-image p-4`}>
              <button onMouseOver={() => handleImageHover(otherImages[0])}>
                <img
                  src={otherImages[0]}
                  alt={product_name}
                  className="w-[100px] h-[100px] sm:h-[40px] object-contain"
                />
              </button>
            </div>
            <div className={`first-image p-4`}>
              <button onMouseOver={() => handleImageHover(image)}>
                <img
                  src={image}
                  alt={product_name}
                  className="w-[100px] h-[100px] object-contain"
                />
              </button>
            </div>
            {otherImages[1] && (
              <div className={`second-image p-4`}>
                <button onMouseOver={() => handleImageHover(otherImages[1])}>
                  <img
                    src={otherImages[1]}
                    alt={product_name}
                    className="w-[100px] h-[100px] object-contain"
                  />
                </button>
              </div>
            )}
          </div>
        )}

        {offers && offers.length > 0 && (
          <div className="offers  absolute left-[4%] top-[110%] sm:top-[64%] sm:w-[270px] sm:h-[100px] sm:left-[23%] sm:text-sm">
            <div className="flex flex-col p-2 shadow-md">
              <div>
                <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-red-300">
                  offers :
                </span>
              </div>
              {offers.map((offer, index) => (
                <div key={index} className=" rounded-md p-3 shadow-sm ">
                  <div className="flex gap-2">
                    <h1 className="">{offer.offer_type}</h1>
                    <span>:</span>
                    <span>{offer.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Single_Product_Image;
