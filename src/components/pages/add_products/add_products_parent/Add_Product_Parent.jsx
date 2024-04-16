import React from "react";
import Add_Product_Form from "../add_products_form/Add_Product_Form";
import Add_Products_To_Firebase from "../add_products_to_firebase/Add_Products_To_Firebase";
// import Add_Products_To_Firebase from "../add_products_to_firebase/Add_Products_To_Firebase";

const Add_Product_Parent = () => {
  return (
    <div>
      <h1>Add Products</h1>
      <Add_Product_Form />

      <Add_Products_To_Firebase />
    </div>
  );
};

export default Add_Product_Parent;
