import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactParent from "./components/pages/contact/contact-parent/Contact_Parent";
import AboutParent from "./components/pages/about/about-parent/About_Parent";
import Home from "./components/pages/home/Home";
import Login from "./components/pages/auth/login/Login";
import Logout from "./components/pages/auth/logout/Logout";
import Register from "./components/pages/auth/register/Register";
import Layout from "./components/router/shared/Layout";
import WishList_Parent from "./components/wishList/wishList-parent/WishList_Parent";
import Cart_Parent from "./components/cart/Shopping/Cart_Parent";
import Checkout_Parent from "./components/checkout/checkout-parent/Checkout_Parent";
import Profile_Parent from "./components/profile/profile-parent/Profile_Parent";
import Single_Product_Details_Parent from "./components/product/single-product-detail-parent/Single_Product_Details_Parent";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Layout />}>
          <Route path="/about" element={<AboutParent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<ContactParent />} />
          <Route path="/wishList" element={<WishList_Parent />} />
          <Route path="/cart" element={<Cart_Parent />} />
          <Route path="/checkout" element={<Checkout_Parent />} />
          <Route path="/profile" element={<Profile_Parent />} />
          <Route path="/single" element={<Single_Product_Details_Parent />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
