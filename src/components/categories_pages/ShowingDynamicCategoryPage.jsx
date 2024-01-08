import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  storePaginatedData,
  storeSortedPaginatedData,
} from "../../redux/slices/allProducts";
import { getPaginatedData } from "../helper";
import UsePagination from "../hooks/usePagination/UsePagination";
import ProductsHook from "../hooks/useProducts/ProductsHook";
import All_Products_Based_On_Category from "./all_products_parent/All_Products_Based_On_Category";
import Filter_Sort_Parent from "./filter_and_sort_parent/Filter_Sort_Parent";

const ShowingDynamicCategoryPage = () => {
  const { categoryName } = useParams();
  const { getStore } = ProductsHook(categoryName);
  const sortedData = useSelector((state) => state.sortingSlice.sort_store);

  const [isPaginatedData, setIsPaginatedData] = useState([]);

  const totalItem = getStore.length;
  const itemPerPage = 6;

  const dispatch = useDispatch();

  const {
    handleGetPageNumber,
    handleGoToPage,
    handleNextPage,
    handlePrevPage,
    currentPage,
    totalPage,
  } = UsePagination({ totalItem, itemPerPage });

  useEffect(() => {
    const paginatedData = getPaginatedData(getStore, currentPage, itemPerPage);
    setIsPaginatedData(paginatedData);

    const paginatedSortedData = getPaginatedData(
      sortedData,
      currentPage,
      itemPerPage
    );

    dispatch(storePaginatedData(paginatedData));
    dispatch(storeSortedPaginatedData(paginatedSortedData));
  }, [currentPage, getStore, dispatch, sortedData]);

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
        <div className="right w-[1100px] 0  mr-[-5%] ">
          <All_Products_Based_On_Category
            store={isPaginatedData}
            category={categoryName}
          />
        </div>
      </div>
      <div className="pagination-section flex justify-end items-center p-5">
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px text-md ">
            <li>
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </button>
            </li>
            {handleGetPageNumber().map((page) => (
              <li key={page}>
                <button
                  onClick={() => handleGoToPage(page)}
                  className={`flex items-center justify-center px-3 h-8 leading-tight ${
                    currentPage === page
                      ? "text-red-600 border border-gray-300 bg-red-50 hover:bg-red-100 hover:text-red-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                      : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  }`}
                >
                  {page}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPage}
                className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ShowingDynamicCategoryPage;
