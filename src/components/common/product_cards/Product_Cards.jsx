import React, { useCallback, useEffect, useState } from "react";
import ProductsHook from "../../hooks/useProducts/ProductsHook";
import { useSelector } from "react-redux";
import ButtonsGroup from "../buttons/ButtonsGroup";
import Product_Cards_Design from "./Product_Cards_Design";
import Arrows from "../arrows/Arrows";
import { productCardPropTypes } from "../../prop-types";
import { Link, useLocation } from "react-router-dom";
import { resetFilters } from "../../../redux/slices/filterSlice";
import { useDispatch } from "react-redux";
import { removeWishList } from "../../../redux/slices/addWishListSlice";
import { deleteProduct } from "../../../redux/slices/addProducts";
import Delete_Confirmation from "../../pages/my_products/delete_products/Delete_Confirmation";
import Delete_Product_From_Firebase from "../../pages/my_products/delete_products/Delete_Product_From_Firebase";
import { collection, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../../../config/Firebase";
import toast from "react-hot-toast";

const Product_Cards = ({ category, flexWrap, btn, mainList }) => {
  const { getStore } = ProductsHook(category);
  const location = useLocation();
  const dispatch = useDispatch();
  const [data, setDataToUse] = useState([]);
  const [confirmationDelete, setConfirmationDelete] = useState(false);
  const [deleteData, setDeleteData] = useState();
  // const [deleteData, setDeleteData] = useState(undefined);

  const [wishListItems, setWishListItems] = useState(() => {
    const storedItem = JSON.parse(localStorage.getItem("wishList-items")) || [];
    return storedItem || [];
  });

  const myAllAddedProducts = useSelector(
    (state) => state.addProducts.myAddedProducts
  );

  const handleDeleteProduct = (elm) => {
    // console.log(index);
    setDeleteData(elm);
    setConfirmationDelete(true);
    // dispatch(deleteProduct(elm));
    // setDeleteData(elm);
  };
  const handleConfirmDelete = async () => {
    if (deleteData) {
      try {
        // Delete the product from Firebase
        await deleteProductFromFirebase(deleteData);

        // Dispatch delete action here if needed
        // dispatch(deleteProduct(deleteData));

        // Reset the delete candidate and close the confirmation modal
        setDeleteData(null);
        setConfirmationDelete(false);
      } catch (error) {
        console.error("Error deleting product from Firebase:", error);
      }
    }
  };
  const deleteProductFromFirebase = async (deleteData) => {
    try {
      const productCollectionRef = collection(db, "products");

      const querySnapshot = await getDocs(productCollectionRef);

      querySnapshot.forEach(async (doc) => {
        const docRef = doc.ref; // Get the document reference
        const data = doc.data().data; // Get the data array from the document
        const updatedData = data.filter((item) => item.id !== deleteData.id);
        await updateDoc(docRef, { data: updatedData });
      });

      toast.success("Document updated successfully!!!");
    } catch (error) {
      console.log("Error from the Delete Function ", error);
    }
  };

  useEffect(() => {
    if (deleteData) {
      // Call the function to delete the product from Firebase
      deleteProductFromFirebase(deleteData);
    }
  }, [deleteData]);

  const handleCancelDelete = () => {
    setDeleteData(null); // Reset the delete candidate
    setConfirmationDelete(false); // Close the confirmation modal
  };

  // console.log(category);

  // console.log(myAllAddedProducts);

  const handleDeleteWishList = (index) => {
    // Dispatch the action to update Redux state
    dispatch(removeWishList(index));

    // Update local state with the current Redux state
    setWishListItems((prevWishListItems) =>
      prevWishListItems.filter((_, i) => i !== index)
    );
  };
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [swipeThreshold, setSwipeThreshold] = useState(90); // Adjust as needed
  const [hiddenOffset, setHiddenOffset] = useState(0);
  const [maxOffset, setMaxOffset] = useState(80); // Adjust as needed
  // const [transitionDuration, setTransitionDuration] = useState("0.3s"); // Adjust as needed
  const [moveLeft, setMoveLeft] = useState(40);
  const [moveRight, setMoveRight] = useState(40);
  // const [touchStart, setTouchStart] = useState(0);

  const filterBrands = useSelector((state) => state.filterSlice.currFilter);
  const paginatedData = useSelector(
    (state) => state.allProducts.paginatedStore
  );
  const sortedPaginated = useSelector(
    (state) => state.allProducts.storeSortedPaginatedData
  );

  const cancelOrders = useSelector((state) => state.allProducts.cancelOrders);

  const { list: listFromRedux } = useSelector((state) => state.viewSlice);
  const filteredPriceRange = useSelector(
    (state) => state.filterSlice.filterRange
  );

  // const maxOffset = category === "randomProducts" ? 125 : 80;

  const handleLeftArrowClick = useCallback(() => {
    // const moveLeft = 50;
    setHiddenOffset((prevOffset) => Math.min(prevOffset + moveLeft, maxOffset));
  }, [maxOffset, moveLeft]);

  const handleRightArrowClick = useCallback(() => {
    // const moveRight = 40;
    setHiddenOffset((prevOffset) => Math.max(prevOffset - moveRight, 0));
  }, [moveRight]);

  useEffect(() => {
    // Check if the pathname starts with "/category/"
    //if the path doesn't start with /category then resetFilter
    if (!location.pathname.startsWith("/category/")) {
      dispatch(resetFilters());
    }
  }, [location.pathname, dispatch]);

  const determineDataToUse = () => {
    if (filterBrands && filterBrands.length > 0) {
      return filterBrands;
    } else if (
      category === "randomProducts" ||
      category === "flash" ||
      category === "otherProducts"
    ) {
      return getStore;
    } else if (category === "cancelOrders") {
      return cancelOrders;
    } else if (
      wishListItems &&
      wishListItems.length > 0 &&
      category === "wishList"
    ) {
      return wishListItems;
    } else if (category === "myAddedProducts") {
      return myAllAddedProducts;
    } else if (filteredPriceRange && filteredPriceRange.length > 0) {
      return filteredPriceRange;
    } else if (sortedPaginated && sortedPaginated.length > 0) {
      return sortedPaginated || [];
    } else if (paginatedData && paginatedData.length > 0) {
      return paginatedData;
    } else {
      return getStore || [];
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 200, behavior: "smooth" });
  }, [filterBrands]);

  useEffect(() => {
    // Update dataToUse state
    setDataToUse(determineDataToUse());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    filterBrands,
    filteredPriceRange,
    sortedPaginated,
    paginatedData,
    getStore,
    category,
    wishListItems,
    cancelOrders,
    myAllAddedProducts,
  ]);
  // useEffect(() => {
  //   setDataToUse(determineDataToUse());
  // }, [wishListItems]);

  useEffect(() => {
    // Adjust max offset and transition duration for small devices
    const isSmallDevice = window.innerWidth <= 768;
    if (isSmallDevice) {
      setMaxOffset(550); // Adjust as needed
      // setTransitionDuration("0 s"); // Adjust as needed
      setMoveLeft(70);
      setMoveRight(80);
    }
  }, []);

  // Event handlers for touch events
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStart - touchEnd;
    if (flexWrap) return;
    if (Math.abs(swipeDistance) > swipeThreshold) {
      if (swipeDistance > 0) {
        // Swiped left
        handleLeftArrowClick();
      } else {
        // Swiped right
        handleRightArrowClick();
      }
    }
  };
  const list =
    location.pathname === "/" || location.pathname === "/wishList"
      ? false
      : listFromRedux;

  return (
    <div
      className="relative"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {myAllAddedProducts?.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-8 ml-4">
          No products added yet.
        </p>
      ) : (
        <div
          className={`
          cards-container relative 
          ${
            list
              ? "flex flex-col w-[95%] justify-center gap-5 ml-6 items-center"
              : flexWrap
              ? "flex flex-wrap w-full justify-center items-center"
              : "flex min-w-full mt-5 mx-4 overflow-hidden"
          }
        `}
          style={{
            transform: `translateX(${-hiddenOffset}vw)`,
            transition: "transform ease-in 0.4s",
            overflow: "visible",
          }}
        >
          {data?.map((currElm, index) => (
            <Product_Cards_Design
              key={index}
              currElm={currElm}
              flexWrap={flexWrap}
              mainList={mainList}
              listItemClass={list}
              handleDeleteProduct={handleDeleteProduct}
              isListView={list}
              handleDeleteWishList={handleDeleteWishList}
              index={index}
            />
          ))}
        </div>
      )}

      {btn && (
        <div className="button w-full">
          <ButtonsGroup btnType={"largeBtn"} name={"View All Products"} />
        </div>
      )}

      {!flexWrap && (
        <div className="setArrowDiv my-5 ">
          <Arrows
            onLeftClick={handleLeftArrowClick}
            onRightClick={handleRightArrowClick}
          />
        </div>
      )}
      <Delete_Confirmation
        isOpen={confirmationDelete}
        message="Are you sure you want to delete this product?"
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
      {/* {confirmationDelete && (
        <Delete_Product_From_Firebase deleteData={deleteData} />
      )} */}
    </div>
  );
};

Product_Cards.propTypes = productCardPropTypes;
export default Product_Cards;
