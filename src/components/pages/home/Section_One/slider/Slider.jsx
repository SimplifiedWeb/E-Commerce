import { useState, useEffect, useMemo } from "react";
import { data } from "../../../../../Data/data_for_Slider";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(false);

  const images = useMemo(
    () => [
      "/images/home_harry.png",
      "/images/zayn-1.png",
      "/images/harry-1.png",
      "/images/zayn-2.png",
      "/images/harry-2.png",
    ],
    []
  );

  const handleProgress = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    setIsTextVisible(true);

    const intervalId = setInterval(() => {
      setIsTextVisible(false);
      // browser don't have enough time to process the transition
      setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsTextVisible(true);
      }, 350);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="slider-container mt-10 mx-auto relative">
      <div className="slider w-[740px] h-[386px] ml-[-20px] mt-[20px] relative overflow-hidden rounded-lg shadow-md">
        <div className="images-container absolute top-0 left-0 w-full h-full">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`slide-${index}`}
              className={`w-full h-full object-contain absolute transition-transform ease-in-out duration-1000 transform ${
                activeIndex === index ? "translate-x-0" : "-translate-x-full"
              }`}
            />
          ))}
        </div>

        <div className="texts absolute top-0 left-0 w-1/2 h-full flex flex-col justify-center text-black p-8 rounded-lg">
          {data.map((currElm, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 mt-[-8px] ${
                index === activeIndex ? "opacity-100" : "opacity-0 hidden"
              } `}
              style={{ transition: "opacity 0.5s ease-in-out" }}
            >
              <h3
                className={`text-2xl font-bold mb-2  ${
                  isTextVisible ? "text-black opacity-100 " : "opacity-0"
                } `}
                style={{ transition: "opacity 0.5s ease-in-out" }}
              >
                {currElm.heading}
              </h3>
              <p
                className={`text-gray-500 mb-4 ${
                  isTextVisible
                    ? "text-black transition-opacity duration-500 "
                    : "opacity-0"
                }`}
                style={{ transition: "opacity 0.5s ease-in-out" }}
              >
                {currElm.subheading}
              </p>
              <p
                className={`text-black-500 mb-4 ${
                  isTextVisible ? "text-black  " : "opacity-0"
                }`}
                style={{ transition: "opacity 0.5s ease-in-out" }}
              >
                {currElm.para}
              </p>
            </div>
          ))}
        </div>

        <div className="right-texts absolute top-0 right-0 w-[35%] h-full flex flex-col justify-center text-black p-8 rounded-lg">
          {data.map((currElm, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0 hidden"
              } `}
            >
              <div className="flex flex-col space-y-2 transition-all">
                {currElm.features.map((feature, index) => (
                  <span
                    key={index}
                    className={`mb-1 text-md ${
                      isTextVisible ? "text-black opacity-100" : "opacity-0"
                    }`}
                    style={{
                      transition: "opacity 0.5s ease-in-out",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Add a subtle box-shadow
                      padding: "6px", // Add some padding for better spacing
                      borderRadius: "8px", // Add rounded corners
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <button
                className="mt-6 bg-[#291913] text-white px-4 py-2 rounded transition-all hover:bg-[#5c4033] focus:outline-none focus:ring focus:border-blue-300"
                onClick={() => (window.location.href = currElm.buttonLink)}
              >
                {currElm.buttonText}
              </button>
              {currElm.illustration && (
                <img
                  src={currElm.illustration}
                  alt={`${currElm.heading} Illustration`}
                  className="mt-6 w-full"
                />
              )}
            </div>
          ))}
        </div>

        <div className="progress absolute left-[10%] bottom-4 transform -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => handleProgress(index)}
              className={`rounded-full w-3 h-3 ${
                activeIndex === index ? "bg-gray-800" : "bg-gray-400"
              }`}
              style={{ transition: "opacity 0.5s ease-in-out" }}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
