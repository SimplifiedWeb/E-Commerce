// import ButtonsGroup from "../../common/buttons/ButtonsGroup";
import Related_Product from "../single-product-detail-info/Related_Product";
import Single_Product_Detail_Info from "../single-product-detail-info/Single_Product_Detail_Info";
import Single_Product_Image from "../single-product-image/Single_Product_Image";
import Single_Product_Info from "../single-product-info/Single_Product_Info";
import Single_Product_Seller_Info from "../single-product-seller-info/Single_Product_Seller_Info";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Single_Product_Details_Parent = () => {
  const { categoryName, categoryId, name } = useParams();

  const allData = useSelector((state) => state.allProducts.store);

  const findSpecificData = allData
    .flatMap((item) => {
      return Object.values(item)[0];
    }) // Flatten the arrays
    .find((item) => item.id === Number(categoryId));

  return (
    <>
      <div className="single-product min-h-[65vh] relative sm:mt-[29%] ">
        <div className="route sm:mt-[-4%]">
          <div className="route flex gap-2  absolute top-[5%] left-[1%]">
            <Link to="/">
              <span className="text-[#868686]">Home</span>
            </Link>
            <span className="text-[#868686]">/</span>
            <Link to={`/category/electronics`}>
              <span className="text-[#868686]">Category Name</span>
            </Link>
            <span className="text-[#868686]">/</span>
            <span>Product Name</span>
          </div>
        </div>

        <div className="left-for-image absolute top-[14%] left-[7%] sm:left-[-20%] sm:ml-[24%] sm:top-[10%]">
          <Single_Product_Image findSpecificData={findSpecificData} />
        </div>

        <div className="middle-for-info absolute top-[15%] left-[47%] sm:left-[0%] sm:top-[120%] sm:px-2  ">
          <Single_Product_Info
            findSpecificData={findSpecificData}
            categoryName={categoryName}
            name={name}
          />
        </div>

        <div className="seller-info absolute top-[15%] left-[82%] sm:hidden ">
          <Single_Product_Seller_Info findSpecificData={findSpecificData} />
        </div>
      </div>
      <div className="second-section-of-page min-h-[100vh] relative sm:mt-[122%]  ">
        <div className="accordions  absolute top-[10%] left-[-3%]">
          <Single_Product_Detail_Info findSpecificData={findSpecificData} />
        </div>
      </div>
      <div className="third-section-of-page sm:mt-[50%]   ">
        <Related_Product />
      </div>
    </>
  );
};

export default Single_Product_Details_Parent;
