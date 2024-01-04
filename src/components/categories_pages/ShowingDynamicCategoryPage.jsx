import { useParams } from "react-router-dom";
import ProductsHook from "../hooks/useProducts/ProductsHook";
import All_Products_Based_On_Category from "./all_products_parent/All_Products_Based_On_Category";
import Filter_Sort_Parent from "./filter_and_sort_parent/Filter_Sort_Parent";

const ShowingDynamicCategoryPage = () => {
  const { categoryName } = useParams();
  const { getStore } = ProductsHook(categoryName);

  return (
    <div className="dynamicCategory min-h-screen relative flex flex-col">
      <div className="route flex gap-2 absolute top-4 left-0">
        <span className="text-[#868686]">Home</span>
        <span className="text-[#868686]">/</span>
        <span className="text-[#868686]">Category</span>
        <span className="text-[#868686]">/</span>
        <span>{categoryName}</span>
      </div>

      <div className="main-content flex-1 flex justify-between relative p-5 mt-[3%] ml-[-5%]">
        <div className="left flex flex-col justify-start items-start gap-1 ">
          <Filter_Sort_Parent store={getStore} />
        </div>
        <div className="right w-[1100px] 0 p-2 mr-[-5%] ">
          <All_Products_Based_On_Category
            store={getStore}
            category={categoryName}
          />
        </div>
      </div>
    </div>
  );
};

export default ShowingDynamicCategoryPage;
