import { lazy, Suspense } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./lang/Language";
import toast, { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pending_Work from "./components/common/pending-works/Pending_Work";
// import Cancel_Orders_Parent from "./components/cancel-orders/cancel_orders_parents/Cancel_Orders_Parent";
import Loading from "./components/common/spinner/Loading";
import AuthProvider from "./components/pages/auth/authContext/AuthContext";
import Protected_Auth_Route from "./components/pages/auth/protected-auth-route/Protected_Auth_Route";
import ConnectionStatus from "./components/pages/home/ConnectionStatus";
// import All_Added_Products_Parents from "./components/pages/my_products/all_my_added_products/All_Added_Products_Parents";
const AllAddedProducts = lazy(() =>
  import(
    "./components/pages/my_products/all_my_added_products/All_Added_Products_Parents"
  )
);
const LazyGettingDataFromFirebase = lazy(() =>
  import("./components/services/GettingDataFromFirebase")
);

const AddProducts = lazy(() =>
  import(
    "./components/pages/add_products/add_products_parent/Add_Product_Parent"
  )
);

const Home = lazy(() => import("./components/pages/home/Home"));
const AboutParent = lazy(() =>
  import("./components/pages/about/about-parent/About_Parent")
);
const Login = lazy(() => import("./components/pages/auth/login/Login"));
const Logout = lazy(() => import("./components/pages/auth/logout/Logout"));

const CancelOrdersParent = lazy(() =>
  import(
    "./components/cancel-orders/cancel_orders_parents/Cancel_Orders_Parent"
  )
);

const Register = lazy(() =>
  import("./components/pages/auth/register/Register")
);
const ContactParent = lazy(() =>
  import("./components/pages/contact/contact-parent/Contact_Parent")
);

// import Contact_Parent from "./components/pages/contact/contact-parent/Contact_Parent";

// const ContactParent = lazy(() => {
//   import("./components/pages/contact/contact-parent/Contact_Parent");
// });

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
const DynamicPages = lazy(() =>
  import("./components/categories_pages/ShowingDynamicCategoryPage")
);

const OrderPage = lazy(() => import("./components/order/Order_Parent"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <AuthProvider>
          <I18nextProvider i18n={i18n}>
            <ConnectionStatus />
            <LazyGettingDataFromFirebase />
            <Routes>
              <Route index element={<Home />} />
              <Route
                path="/" // Change 'index' to 'path'
                element={<Layout />}
              >
                <Route
                  path="/about"
                  element={
                    <div className="overflow-hidden sm:px-0">
                      <AboutParent />
                    </div>
                  }
                />
                <Route path="/cancelOrders" element={<CancelOrdersParent />} />
                <Route
                  path="/my_added_products"
                  element={<AllAddedProducts />}
                />

                <Route path="/orders" element={<OrderPage />} />
                <Route path="/reviews" element={<Pending_Work />} />

                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/register" element={<Register />} />
                <Route path="/contact" element={<ContactParent />} />
                <Route path="/add_product" element={<AddProducts />} />
                <Route
                  path="/product/:categoryName/:name/:categoryId"
                  element={<SingleProductDetailsParent />}
                />
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
                <Route
                  path="/category/:categoryName"
                  element={<DynamicPages />}
                />
                <Route path="*" element={<Pending_Work />} />
              </Route>
            </Routes>
            <Toaster />
          </I18nextProvider>
        </AuthProvider>
      </Suspense>
    </Router>
  );
};

export default App;
