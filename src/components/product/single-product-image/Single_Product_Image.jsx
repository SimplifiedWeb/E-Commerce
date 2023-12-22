const Single_Product_Image = () => {
  const offers = [
    {
      offer_type: "Flat Discount",
      description: "Get flat ₹150 off on this product",
    },
    {
      offer_type: "Bank Offer",
      description: "20% off on HDFC Debit/Credit Cards",
    },
  ];
  return (
    <>
      <div className="image w-[500px] flex flex-col justify-center items-center ">
        <img
          src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81nZHxx4uNL._SX679_.jpg"
          alt="tv"
          className="w-[600px] h-[300px] object-center  object-contain"
        />
        <div className="other-images flex flex-col border-[0.5px] shadow-sm border-gray-100 gap-10 absolute top-[-5%] left-[-25%]">
          <div className="first-image p-4">
            <button>
              <img
                src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71jmILLVxmL._SX425_.jpg"
                alt="tv"
                className="w-[100px] h-[100px] object-contain"
              />
            </button>
          </div>
          <div className="second-image p-4">
            <button>
              <img
                src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/719aqBUG8YL._SX425_.jpg"
                alt="tv"
                className="w-[100px] h-[100px] object-contain"
              />
            </button>
          </div>
        </div>
        <div className="offers  absolute left-[5%] top-[110%]">
          <div className="flex flex-col p-2 shadow-md">
            <div>
              <span className="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-red-300">
                offers :
              </span>
            </div>
            {offers.map((offer, index) => (
              <div
                key={index}
                className=" rounded-md p-4 shadow-sm  text-center"
              >
                <div className="flex gap-2">
                  <h1 className="">{offer.offer_type}</h1>
                  <span>:</span>
                  <span>{offer.description}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Single_Product_Image;
