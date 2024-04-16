import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { db } from "../../../../../config/Firebase";
import {
  addDataToFirebase,
  stateChangesForAdd,
} from "../../../../redux/slices/addProducts";

const Add_Product_Form = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    product_name: "",
    image: "",
    description: "",
    brand: "",
    category: "",
    color: "",
    highlights: "",
    seller: {
      seller_name: "",
    },
    otherImages: ["", ""],

    shipping_address: "",
    discount: "",
    offer: "",
    current_price: 0,
  });
  const [categories, setCategories] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prevData) => ({
        ...prevData,
        [parent]: {
          ...prevData[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const productCollection = collection(db, "products");
        const querySnapshot = await getDocs(productCollection);

        const categoriesData = [];

        if (querySnapshot.size > 0) {
          querySnapshot.forEach((doc) => {
            if (!categoriesData.includes(doc.id)) {
              categoriesData.push(doc.id);
            }
            [];
          });

          setCategories(categoriesData);
        } else {
          console.log("No documents found in the 'product' collection");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);
  const handleOtherImagesChange = (index, value) => {
    const updatedOtherImages = [...formData.otherImages];
    updatedOtherImages[index] = value;
    setFormData({ ...formData, otherImages: updatedOtherImages });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addDataToFirebase(formData));
    setTimeout(() => {
      dispatch(stateChangesForAdd(true));
    }, 0);
    toast.success("Added!!!");

    setFormData({
      product_name: "",
      image: "",
      description: "",
      brand: "",
      category: "",
      color: "",
      otherImages: ["", ""],
      highlights: "",
      seller: {
        seller_name: "",
      },
      shipping_address: "",
      discount: "",
      offer: "",
      current_price: 0,
    });
  };

  return (
    <>
      <div className="max-w-3xl sm:max-w-md mx-auto mt-6 p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-6">Add Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 2xl:grid-cols-2">
            <input
              type="text"
              required
              name="product_name"
              placeholder="Product Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              value={formData.product_name}
              onChange={handleChange}
            />
            <input
              type="text"
              required
              name="image"
              placeholder="Image Link"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              value={formData.image}
              onChange={handleChange}
            />
            {formData.otherImages.map((otherImage, index) => (
              <input
                key={index}
                type="text"
                required
                placeholder={`Other Image Link ${index + 1}`}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                value={otherImage}
                onChange={(e) => handleOtherImagesChange(index, e.target.value)}
              />
            ))}
            <textarea
              name="description"
              placeholder="Description"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              value={formData.description}
              onChange={handleChange}
            />
            <input
              type="text"
              required
              name="brand"
              placeholder="Brand"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              value={formData.brand}
              onChange={handleChange}
            />
            <div>
              <label htmlFor="category">Category:</label>
              <select
                name="category"
                id="category"
                required
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select a category</option>
                {categories?.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <input
              type="text"
              required
              name="color"
              placeholder="Color"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              value={formData.color}
              onChange={handleChange}
            />

            <textarea
              required
              name="highlights"
              placeholder="Highlights"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              value={formData.highlights}
              onChange={handleChange}
            />
            <input
              type="number"
              required
              name="current_price"
              placeholder="Product price"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              value={formData.current_price}
              onChange={handleChange}
            />
            <input
              type="text"
              required
              name="seller.seller_name"
              placeholder="Seller Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              value={formData.seller.seller_name}
              onChange={handleChange}
            />
            <input
              type="text"
              required
              name="shipping_address"
              placeholder="Shipping Address"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              value={formData.shipping_address}
              onChange={handleChange}
            />
            <input
              type="text"
              required
              name="discount"
              placeholder="Discount"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              value={formData.discount}
              onChange={handleChange}
            />
            <input
              type="text"
              required
              name="offer"
              placeholder="Offer"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              value={formData.offer}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            required
            className="w-full mt-6 bg-red-500 text-white p-3 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Add_Product_Form;
