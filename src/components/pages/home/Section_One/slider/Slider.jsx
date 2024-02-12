import { useState, useEffect, useMemo, useCallback } from "react";
import { data } from "../../../../../data_for_Slider";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const memoizedData = useMemo(() => data, []);

  const images = useMemo(
    () => [
      "/images/home_harry.png",
      "/images/slider/electronics.png",
      "/images/slider/homeInterior.png",
      "/images/slider/machinaryTools.png",
      "/images/slider/smartPhones.png",
    ],
    []
  );

  const handleProgress = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    setIsTextVisible(true);

    const intervalId = setInterval(() => {
      setIsTextVisible(false);
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsTextVisible(true);
    }, 4000); // Adjust the interval time as needed

    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div className="slider-container mt-10 mx-auto relative">
      <div className="slider w-[740px] h-[403px] ml-[-10px] sm:w-[400px] sm:h-[350px] relative overflow-hidden rounded-lg shadow-md flex">
        <div className="images-container w-1/2 relative">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              loading="lazy"
              alt={`slide-${index}`}
              className={`w-[400px] h-[403px] sm:w-[300px] sm:h-[403px] object-cover absolute transition-transform ease-in-out duration-1000 transform ${
                activeIndex === index ? "translate-x-0" : "-translate-x-full"
              }`}
            />
          ))}
        </div>

        <div className="details-container w-1/2 sm:w-[200px] relative p-6 sm:p-4 ">
          {memoizedData.map((currElm, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 mt-[-8px] ${
                index === activeIndex ? "opacity-100" : "opacity-0 hidden"
              } `}
              style={{ transition: "opacity 0.5s ease-in-out" }}
            >
              <h3
                className={`text-3xl font-bold mb-2  ${
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
              <div className="flex flex-col space-y-2 sm:hidden">
                {currElm.features.map((feature, index) => (
                  <span
                    key={index}
                    className={`mb-1 text-md ${
                      isTextVisible ? "text-black opacity-100" : "opacity-0"
                    }`}
                    style={{
                      transition: "opacity 0.5s ease-in-out",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      padding: "6px",
                      borderRadius: "8px",
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
            </div>
          ))}
        </div>

        {/* <div className="right-texts absolute top-0 right-0 w-[35%] h-full flex flex-col justify-center text-black p-8 rounded-lg">
          {memoizedData.map((currElm, index) => (
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
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                      padding: "6px",
                      borderRadius: "8px",
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
        </div> */}

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
