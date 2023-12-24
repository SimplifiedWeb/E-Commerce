import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./components/common/spinner/Loading";
import AuthProvider from "./components/pages/auth/authContext/AuthContext";
import Protected_Auth_Route from "./components/pages/auth/protected-auth-route/Protected_Auth_Route";

const Home = lazy(() => import("./components/pages/home/Home"));
const AboutParent = lazy(() =>
  import("./components/pages/about/about-parent/About_Parent")
);
const Login = lazy(() => import("./components/pages/auth/login/Login"));
const Logout = lazy(() => import("./components/pages/auth/logout/Logout"));
const Register = lazy(() =>
  import("./components/pages/auth/register/Register")
);
const ContactParent = lazy(() =>
  import("./components/pages/contact/contact-parent/Contact_Parent")
);
const WishListParent = lazy(() =>
  import("./components/wishList/wishList-parent/WishList_Parent")
);
const CartParent = lazy(() => import("./components/cart/Shopping/Cart_Parent"));
const CheckoutParent = lazy(() =>
  import("./components/checkout/checkout-parent/Checkout_Parent")
);
const ProfileParent = lazy(() =>
  import("./components/profile/profile-parent/Profile_Parent")
);
const SingleProductDetailsParent = lazy(() =>
  import(
    "./components/product/single-product-detail-parent/Single_Product_Details_Parent"
  )
);
const Layout = lazy(() => import("./components/router/shared/Layout"));

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route index element={<Home />} />
            <Route
              path="/" // Change 'index' to 'path'
              element={<Layout />}
            >
              {/* Nested Routes */}
              <Route path="/about" element={<AboutParent />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/register" element={<Register />} />
              <Route path="/contact" element={<ContactParent />} />
              <Route
                path="/wishList"
                element={
                  <Protected_Auth_Route>
                    <WishListParent />
                  </Protected_Auth_Route>
                }
              />
              <Route
                path="/cart"
                element={
                  <Protected_Auth_Route>
                    <CartParent />
                  </Protected_Auth_Route>
                }
              />
              <Route
                path="/checkout"
                element={
                  <Protected_Auth_Route>
                    <CheckoutParent />
                  </Protected_Auth_Route>
                }
              />
              <Route path="/profile" element={<ProfileParent />} />
              <Route path="/single" element={<SingleProductDetailsParent />} />
            </Route>
          </Routes>
        </Suspense>
      </AuthProvider>
    </Router>
  );
};

export default App;
