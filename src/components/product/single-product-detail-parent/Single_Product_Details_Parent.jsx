import ButtonsGroup from "../../common/buttons/ButtonsGroup";
import Related_Product from "../single-product-detail-info/Related_Product";
import Single_Product_Detail_Info from "../single-product-detail-info/Single_Product_Detail_Info";
import Single_Product_Image from "../single-product-image/Single_Product_Image";
import Single_Product_Info from "../single-product-info/Single_Product_Info";
import Single_Product_Seller_Info from "../single-product-seller-info/Single_Product_Seller_Info";

const Single_Product_Details_Parent = () => {
  const sampleData = [
    {
      id: 2001,
      product_name: "Ultra HD Smart TV",
      price: 599,
      quantity: 10,
      category: "flash_sales",
      description:
        "Upgrade your entertainment experience with the Ultra HD Smart TV. This TV features a stunning 4K display, smart functionality, and immersive audio. Enjoy your favorite movies, shows, and games in high definition with this cutting-edge television.",
      rating: 4.9,
      color: ["black"],
      size: "55-Inch",
      shipping_address: "7677 Living Room Lane",
      image:
        "	https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/81nZHxx4uNL._SX679_.jpg",
      otherImages: [
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/71jmILLVxmL._SX425_.jpg",
        "https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/719aqBUG8YL._SX425_.jpg",
      ],
      discount: 25,
      seller: {
        seller_name: "TechVision",
        seller_rating: 4.8,
      },
      current_price: 449,
      original_price: 599,
      discounted: true,
      in_stock: true,
      f_assured: true,
      highlights: [
        "Ultra HD Smart TV",
        "4K Display for Stunning Visuals",
        "Smart Functionality for Convenience",
        "Immersive Audio for Enhanced Experience",
        "55-Inch Size for a Cinematic Feel",
      ],
      offers: [
        {
          offer_type: "Flat Discount",
          description: "Get flat ₹150 off on this product",
        },
        {
          offer_type: "Bank Offer",
          description: "20% off on HDFC Debit/Credit Cards",
        },
      ],
    },
  ];
  return (
    <>
      <div className="single-product min-h-[65vh] relative ">
        <div className="route">
          <div className="route flex gap-2 absolute top-[5%] left-[1%]">
            <span className="text-[#868686]">Home</span>
            <span className="text-[#868686]">/</span>
            <span className="text-[#868686]">Category Name</span>
            <span className="text-[#868686]">/</span>
            <span>Product Name</span>
          </div>
        </div>

        <div className="left-for-image absolute top-[14%] left-[7%] ">
          <Single_Product_Image />
        </div>
        <div className="middle-for-info absolute top-[15%] left-[47%]">
          <Single_Product_Info />
        </div>
        <div className="seller-info absolute top-[15%] left-[82%]">
          <Single_Product_Seller_Info />
        </div>
      </div>
      <div className="second-section-of-page min-h-[100vh] relative">
        <div className="accordions  absolute top-[10%] left-[-3%]">
          <Single_Product_Detail_Info />
        </div>
      </div>
      <div className="third-section-of-page   ">
        <Related_Product />
      </div>
    </>
  );
};

export default Single_Product_Details_Parent;
