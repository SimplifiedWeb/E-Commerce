import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { useState } from "react";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";

// import {} from '..'

const Single_Product_Detail_Info = () => {
  const data = [
    "Ultra HD Smart TV",
    "4K Display for Stunning Visuals",
    "Immersive Audio for Enhanced Experience",
    "Smart Functionality for Convenience",
    "55-Inch Size for a Cinematic Feel",
  ];
  const specs = [
    {
      details: {
        property: "In The Box",
        value:
          "Handset, Charger, USB Cable, SIM Ejector Pin, Quick Start Guide",
      },
    },
    {
      os: {
        property: "Processor Type",
        value: "Exynos 990",
      },
    },
    {
      ram: {
        property: "RAM",
        value: "12 GB",
      },
    },
    {
      camera: {
        property: "Primary Camera",
        value: "108MP + 10x Zoom",
      },
    },
    {
      network: {
        property: "Supported Networks",
        value: "5G, 4G VoLTE, 4G LTE, WCDMA, GSM",
      },
    },
    {
      battery: {
        property: "Battery Capacity",
        value: "5000 mAh",
      },
    },
  ];
  const [isOpen, setIsOpen] = useState({
    desc: true,
    specs: false,
    reviews: false,
    shipping: false,
    seller: false,
  });

  const handleOpen = (section) => {
    setIsOpen((prev) => ({
      ...Object.fromEntries(Object.keys(prev).map((key) => [key, false])),
      [section]: true,
    }));
  };

  return (
    <>
      <div className="detail-info flex justify-between items-start">
        <div className="acc shadow-2xl p-5 w-[1200px]">
          <div className="buttons flex gap-[70px] pt-3 ">
            <button
              className={`${isOpen.desc && "bg-slate-100 p-5"}`}
              onClick={() => handleOpen("desc")}
            >
              Description
            </button>
            <button
              className={`${isOpen.specs && "bg-slate-100 p-5"}`}
              onClick={() => handleOpen("specs")}
            >
              Specification
            </button>
            <button
              className={`${isOpen.reviews && "bg-slate-100 p-5"}`}
              onClick={() => handleOpen("reviews")}
            >
              Reviews
            </button>
            <button
              className={`${isOpen.shipping && "bg-slate-100 p-5"}`}
              onClick={() => handleOpen("shipping")}
            >
              Shipping
            </button>
            <button
              className={`${isOpen.seller && "bg-slate-100 p-5"}`}
              onClick={() => handleOpen("seller")}
            >
              About Seller
            </button>
          </div>
          {isOpen.desc && (
            <div className="dataToBeShown p-4 bg-slate-100">
              <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                Details:
              </span>
              <p className="p-3 tracking-wide">
                Upgrade your entertainment experience with the Ultra HD Smart
                TV. This TV features a stunning 4K display, smart functionality,
                and immersive audio. Enjoy your favorite movies, shows, and
                games in high definition with this cutting-edge television
              </p>
              <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                Features:
              </span>
              <div className="flex gap-2 w-[700px] justify-between flex-wrap p-3">
                {data.map((item, index) => (
                  <div key={index} className="flex ">
                    {/* First Column (Check Icon) */}
                    <div className=" pr-2">
                      <CheckOutlinedIcon
                        style={{
                          width: "16px",
                          color: "#0af03c",
                          fontWeight: "bold",
                        }}
                      />
                    </div>

                    {/* Second Column (Text) */}
                    <div className="flex justify-start items-start w-[280px]">
                      <h3 className="">{item}</h3>
                    </div>
                  </div>
                ))}
              </div>

              <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900  dark:text-red-300">
                Model :
              </span>
              <div className="relative overflow-x-auto mt-2 ">
                <table className="w-full text-sm  text-left table-auto bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700">
                  <tbody>
                    <tr className="border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium border-r whitespace-nowrap"
                      >
                        Model
                      </th>
                      <td className="px-6 py-4">Latest model A-123121</td>
                    </tr>
                    <tr className="border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 border-r whitespace-nowrap dark:text-white"
                      >
                        Style
                      </th>
                      <td className="px-6 py-4">Modern style</td>
                    </tr>
                    <tr className="border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 border-r whitespace-nowrap dark:text-white"
                      >
                        Certificate
                      </th>
                      <td className="px-6 py-4">ISO-8791287391231</td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 border-r whitespace-nowrap dark:text-white"
                      >
                        Size
                      </th>
                      <td className="px-6 py-4">52 inches</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {isOpen.specs && (
            <div className="specification bg-slate-100 p-4 flex justify-between items-center rounded-md overflow-hidden">
              <div className="content flex flex-col gap-3 w-[700px]">
                {specs.length > 0 &&
                  specs.map((currElm, index) => {
                    const data = Object.keys(currElm)[0];
                    const details = currElm[data];

                    return (
                      <div
                        key={index}
                        className="border-b border-gray-300 pb-2 relative"
                      >
                        <div className="absolute top-[-10px] left-[-8px]">
                          <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                            {data}:
                          </span>
                        </div>
                        <div className="details flex mt-5">
                          <div className="font-semibold w-1/3">
                            {details.property}
                          </div>
                          <div className="w-2/3 mb-2">{details.value}</div>
                        </div>
                      </div>
                    );
                  })}
              </div>
              <img
                src="/images/home_harry.png"
                alt="harry"
                className="w-[400px] h-[350px] object-contain"
              />
            </div>
          )}

          {isOpen.reviews && (
            <div className="reviews bg-slate-100 p-4 rounded-md overflow-hidden">
              <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>

              <div className="review mb-3">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-gray-300 flex items-center justify-center rounded-full mr-3">
                    <Person2OutlinedIcon className="" />
                  </div>
                  <div>
                    <p className="font-semibold">Shakeel Dada</p>
                    <p className="text-gray-500 text-sm">Verified Buyer</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="review">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-gray-300 flex items-center justify-center rounded-full mr-3">
                    <Person2OutlinedIcon className="" />
                  </div>
                  <div>
                    <p className="font-semibold">Raju Bhai</p>
                    <p className="text-gray-500 text-sm">Verified Buyer</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          )}

          {isOpen.shipping && (
            <div className="shipping-address bg-slate-100 p-4 rounded-md overflow-hidden">
              <h2 className="text-2xl font-bold mb-4">Shipping Address</h2>

              <div className="address">
                <p className="font-semibold mb-2">John Doe</p>
                <p>123 Main Street</p>
                <p>Cityville, State 12345</p>
                <p>Country</p>
              </div>
            </div>
          )}

          {isOpen.seller && (
            <div className="seller-info bg-slate-100 p-4 rounded-md overflow-hidden">
              <h2 className="text-2xl font-bold mb-4">About the Seller</h2>

              <div className="seller-details">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 flex items-center justify-center rounded-full mr-4">
                    <Person2OutlinedIcon className="" />
                  </div>
                  <div>
                    <p className="font-semibold">Seller Name</p>
                    <p className="text-gray-500 text-sm">Average Rating: 4.5</p>
                  </div>
                </div>

                <p className="text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <p className="text-gray-700 mt-2">
                  Contact the seller:&nbsp;
                  <a href="mailto:seller@example.com">seller@example.com</a>
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="randomProduct p-4 shadow-2xl">
          <h1>You May Like</h1>
          <div className="first-section flex gap-2 items-center border-b-2 border-gray-300 p-2   ">
            <span className="w-[60px] h-[60px] bg-gray-300 text-2xl p-2 flex justify-center items-center ">
              <Person2OutlinedIcon className="" />
            </span>
            <div className="flex flex-col">
              <span>Mens Wallet Leather, Small, Blue color</span>
              <span>$7.00 - $99.50</span>
            </div>
          </div>

          <div className="first-section flex gap-2 items-center border-b-2 border-gray-300 p-2   ">
            <span className="w-[60px] h-[60px] bg-gray-300 text-2xl p-2 flex justify-center items-center ">
              <Person2OutlinedIcon className="" />
            </span>
            <div className="flex flex-col">
              <span>Mens Wallet Leather, Small, Blue color</span>
              <span>$7.00 - $99.50</span>
            </div>
          </div>
          <div className="first-section flex gap-2 items-center border-b-2 border-gray-300 p-2   ">
            <span className="w-[60px] h-[60px] bg-gray-300 text-2xl p-2 flex justify-center items-center ">
              <Person2OutlinedIcon className="" />
            </span>
            <div className="flex flex-col">
              <span>Mens Wallet Leather, Small, Blue color</span>
              <span>$7.00 - $99.50</span>
            </div>
          </div>
          <div className="first-section flex gap-2 items-center border-b-2 border-gray-300 p-2   ">
            <span className="w-[60px] h-[60px] bg-gray-300 text-2xl p-2 flex justify-center items-center ">
              <Person2OutlinedIcon className="" />
            </span>
            <div className="flex flex-col">
              <span>Mens Wallet Leather, Small, Blue color</span>
              <span>$7.00 - $99.50</span>
            </div>
          </div>
          <div className="first-section flex gap-2 items-center border-b-2 border-gray-300 p-2   ">
            <span className="w-[60px] h-[60px] bg-gray-300 text-2xl p-2 flex justify-center items-center ">
              <Person2OutlinedIcon className="" />
            </span>
            <div className="flex flex-col">
              <span>Mens Wallet Leather, Small, Blue color</span>
              <span>$7.00 - $99.50</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Single_Product_Detail_Info;
