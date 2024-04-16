import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { deleteProduct } from "../../../redux/slices/addProducts";
// import firebase from "firebase/app";
// import "firebase/firestore";

const Delete_Product_From_Firebase = ({ deleteData }) => {
  // const dispatch = useDispatch();
  console.log(deleteData);

  // useEffect(() => {
  //   if (deleteData) {
  //     // Connect to the Firebase Firestore
  //     const db = firebase.firestore();

  //     // Get the "products" collection reference
  //     const productsRef = db.collection("products");

  //     // Find the document with the matching data
  //     productsRef
  //       .where("data", "array-contains", deleteData)
  //       .get()
  //       .then((querySnapshot) => {
  //         querySnapshot.forEach((doc) => {
  //           // Remove the matching data from the "data" array
  //           const updatedData = doc
  //             .data()
  //             .data.filter((item) => item !== deleteData);
  //           productsRef.doc(doc.id).update({ data: updatedData });
  //         });
  //       })
  //       .catch((error) => {
  //         console.error("Error deleting product from Firebase:", error);
  //       });

  //     // Dispatch the delete action to update the Redux state
  //     // dispatch(deleteProduct(deleteData));
  //   }
  // }, [deleteData, dispatch]);

  // return null;
};

export default Delete_Product_From_Firebase;
