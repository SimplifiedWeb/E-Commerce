import { collection, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { db } from "../../../../../config/Firebase";
import { gettingMyAddedProducts } from "../../../../redux/slices/addProducts";
import Product_Cards from "../../../common/product_cards/Product_Cards";
import Product_Main_Heading from "../../../common/product_div_headings/Product_Main_Heading";
import { getAuth } from "../../auth/authContext/AuthContext";

const All_Added_Products_Parents = () => {
  const { currentUser } = getAuth();
  const [products, setProducts] = useState();
  const dispatch = useDispatch();
  //   const [allData, setAllData] = useState([]);
  useEffect(() => {
    const gettingData = async () => {
      try {
        const productCollection = collection(db, "products");
        const allTheDocs = await getDocs(productCollection);

        const filteredProduct = [];

        allTheDocs.forEach((doc) => {
          doc?.data()?.data?.forEach((product) => {
            if (product?.email === currentUser?.email) {
              filteredProduct.push(product);
            }
          });
        });
        setProducts(filteredProduct);
      } catch (error) {
        console.log("GettingData function is not worked ", error);
      }
    };
    gettingData();
  }, [currentUser]);

  //   console.log(Array.isArray(products));
  console.log(products);

  useEffect(() => {
    setTimeout(() => {
      if (Array.isArray(products)) {
        dispatch(gettingMyAddedProducts(products));
      } else {
        console.log("wait");
      }
    }, 0);
  }, [products]);

  return (
    <>
      {/* {isError && <p>{isError}</p>} */}
      <div className="main  min-h-[79vh] pt-4 px-3 mt-10 sm:mt-[32%]">
        {/* bg-[#f2f0ea]  */}
        <div className="heading">
          <Product_Main_Heading data={"Your Added Products"} />
        </div>
        <div className="content flex flex-wrap  m-auto ">
          <Product_Cards category={"myAddedProducts"} flexWrap={true} />
        </div>
      </div>
    </>
  );
};

export default All_Added_Products_Parents;
