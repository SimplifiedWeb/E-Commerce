import { randomProductFromSingleProductFolder } from "../../prop-types";

const Random_Product = ({ image, product_name, current_price }) => {
  console.log(product_name);
  console.log("rnn");
  return (
    <>
      <div>
        <div className="bg-white text-black border-2 border-red-400 p-5 mb-4 rounded-md shadow-md">
          {/* <p className="text-gray-600 mb-4">{description}</p> */}
          <img
            src={image}
            alt={product_name}
            className="w-[80px] object-contain"
          />
          <div className="flex justify-between items-center p-4">
            <h2 className="text-xl font-bold mb-2">{product_name}</h2>
            <span className="text-green-600 font-semibold">
              {current_price}
            </span>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              View Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Random_Product.propTypes = randomProductFromSingleProductFolder;

export default Random_Product;
