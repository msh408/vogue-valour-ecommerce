import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import HomePage from "../pages/HomePage";
import ProductsPage from '../pages/ProductsPage'
import ProductDetailsPage from '../pages/ProductDetailsPage'
import WishlistPage from '../pages/WishlistPage'
import CartPage from '../pages/CartPage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignupPage';
import NotFoundPage from '../pages/NotFoundPage'
import Category_Filter from "../pages/Category_Filter";
import Women from '../pages/Women';
import Men from '../pages/Men'
import NewProducts from "../pages/NewProducts";
import Collection from "../pages/Collection";
import Journals from "../pages/Journals";
import JournalDetails from "../pages/JournalDetails";
import ForgotPassword from "../pages/ForgotPassword";
import Profile from "../pages/Profile";
import Checkout from "../pages/Checkout";


function AppRoutes({ products, designers, journal }) {
  return (
    <Router>
      <Routes>

        <Route element={<MainLayout products={products} />}>

          <Route
            path="/"
            element={
              <HomePage
                products={products}
                designers={designers}
                journal={journal}
              />
            }
          />

          <Route
            path="/products"
            element={<ProductsPage products={products} />}
          />

          <Route
            path="/product/:id"
            element={<ProductDetailsPage products={products} />}
          />

          <Route
            path="/journal"
            element={<Journals journal={journal} />}
          />

          <Route
            path="/journal/:id"
            element={<JournalDetails journal={journal} />}
          />

          <Route
            path="/men"
            element={<Men products={products} />}
          />

          <Route
            path="/women"
            element={<Women products={products} />}
          />

          <Route
            path="/new"
            element={<NewProducts products={products} />}
          />

          <Route
            path="/collection"
            element={<Collection products={products} />}
          />

          <Route
            path="/filter"
            element={<Category_Filter products={products} />}
          />

          <Route path="/wishlist" element={<WishlistPage />} />

          <Route path="/cart" element={<CartPage />} />

        </Route>

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/login" element={<LoginPage />} />

         <Route path="/profile" element={<Profile />} />

        <Route path="/signup" element={<SignUpPage />} />

         <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="*" element={<NotFoundPage />} />

      </Routes>
    </Router>
  );
}

export default AppRoutes;
