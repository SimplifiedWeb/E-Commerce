import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import { useState } from "react";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import { useEffect } from "react";

// import {} from '..'

const Single_Product_Detail_Info = ({ findSpecificData }) => {
  const {
    current_price,
    highlights,
    image,
    specs,
    otherImages,
    product_name,
    category,
    seller,
    shipping_address,
    quantity,
    description,
    discount,
    size,
    offers,
    original_price,
  } = findSpecificData;
  const [showSpecs, setShowSpecs] = useState(false);
  const [isOpen, setIsOpen] = useState({
    desc: true,
    specs: false,
    reviews: false,
    shipping: false,
    seller: false,
  });

  useEffect(() => {
    if (category === "mobile") {
      setShowSpecs(true);
    } else {
      setShowSpecs(false);
    }
  }, [category]);

  const handleOpen = (section) => {
    // setIsOpen((prev) => ({
    //   ...Object.fromEntries(Object.keys(prev).map((key) => [key, false])),
    //   [section]: true,
    // }));

    setIsOpen({
      desc: false,
      specs: false,
      reviews: false,
      shipping: false,
      seller: false,
      [section]: true,
    });
  };

  return (
    <>
      <div className="detail-info flex justify-between relative  items-start  sm:w-full sm:overflow-hidden  ">
        <div className="acc shadow-2xl p-5 w-[1000px] sm:w-[100%]">
          <div className="buttons sm:w-[50%] flex gap-[70px] sm:gap-3 sm:text-sm pt-3 ">
            <button
              className={`${isOpen.desc && "bg-slate-100 p-5 sm:p-2"}`}
              onClick={() => handleOpen("desc")}
            >
              Description
            </button>
            {showSpecs && (
              <button
                className={`${isOpen.specs && "bg-slate-100 p-5 sm:p-2"}`}
                onClick={() => handleOpen("specs")}
              >
                Specification
              </button>
            )}

            <button
              className={`${isOpen.reviews && "bg-slate-100 p-5 sm:p-2"}`}
              onClick={() => handleOpen("reviews")}
            >
              Reviews
            </button>
            <button
              className={`${isOpen.shipping && "bg-slate-100 p-5 sm:p-2"}`}
              onClick={() => handleOpen("shipping")}
            >
              Shipping
            </button>
            <button
              className={`${isOpen.seller && "bg-slate-100 p-5 sm:p-2"}`}
              onClick={() => handleOpen("seller")}
            >
              About Seller
            </button>
          </div>
          {isOpen.desc && (
            <div className="dataToBeShown sm:w-[50%] p-4 bg-slate-100">
              <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                Details:
              </span>
              <p className="p-3 tracking-wide">{description}</p>
              <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                Features:
              </span>
              <div className="flex gap-2 w-[700px] justify-between flex-wrap p-3 sm:flex-col">
                {(Array.isArray(highlights) ? highlights : [highlights]).map(
                  (item, index) => (
                    <div key={index} className="flex">
                      {/* First Column (Check Icon) */}
                      <div className="pr-2">
                        <CheckOutlinedIcon
                          style={{
                            width: "16px",
                            color: "#0af03c",
                            fontWeight: "bold",
                          }}
                        />
                      </div>

                      {/* Second Column (Text) */}
                      <div className="flex justify-start sm:flex-wrap items-start w-[280px]">
                        <h3>{item}</h3>
                      </div>
                    </div>
                  )
                )}
              </div>

              <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900  dark:text-red-300">
                Model :
              </span>
              <div className="relative overflow-x-auto mt-2 ">
                <table className="w-full text-sm  text-left table-auto bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700">
                  <tbody className="sm:text-white">
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
                      <td className="px-6 py-4">{size || "Available"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {isOpen.specs && (
            <div className="specification sm:w-[50%] bg-slate-100 p-4 flex justify-between items-center rounded-md overflow-hidden">
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
                src={image}
                alt="image"
                className="w-[400px] h-[350px] object-contain sm:hidden"
              />
            </div>
          )}

          {isOpen.reviews && (
            <div className="reviews bg-slate-100 p-4 rounded-md overflow-hidden sm:w-full ">
              <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>

              <div className="review mb-3 ">
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
            <div className="shipping-address bg-slate-100 p-4 rounded-md overflow-hidden sm:w-full">
              <h2 className="text-2xl font-bold mb-4">Shipping Address</h2>

              <div className="address">
                <p className="font-semibold mb-2">John Doe</p>
                <p> {shipping_address}</p>
                <p>Cityville, State 12345</p>
                <p>Country</p>
              </div>
            </div>
          )}

          {isOpen.seller && (
            <div className="seller-info bg-slate-100 p-4 rounded-md overflow-hidden sm:w-full">
              <h2 className="text-2xl font-bold mb-4">About the Seller</h2>

              <div className="seller-details ">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 flex items-center justify-center rounded-full mr-4">
                    <Person2OutlinedIcon className="" />
                  </div>
                  <div>
                    <p className="font-semibold">{seller.seller_name}</p>
                    <p className="text-gray-500 text-sm">
                      Average Rating: {seller.seller_rating}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700">
                  {seller.seller_name} is committed to providing high-quality
                  products and excellent service. With an average rating of{" "}
                  {seller.seller_rating}, our customers trust us for a seamless
                  shopping experience.
                </p>

                <p className="text-gray-700 mt-2">
                  Contact the seller:&nbsp;
                  <a href="mailto:seller@example.com">
                    {seller.seller_name}@gmail.com
                  </a>
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="randomProduct p-4 w-[38%] absolute top-5 right-[-38%] sm:hidden">
          {/* <h1>You May Like</h1> */}
          <img
            src="https://plus.unsplash.com/premium_photo-1683746792239-6ce8cdd3ac78?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="something"
            className="w-[600px] h-[600px]"
          />
        </div>
      </div>
    </>
  );
};

export default Single_Product_Detail_Info;
