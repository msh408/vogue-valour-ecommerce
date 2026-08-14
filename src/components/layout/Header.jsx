import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoSearchOutline, IoHeartOutline, IoLogInOutline } from "react-icons/io5";
import { HiOutlineShoppingBag, HiOutlineBars3 } from "react-icons/hi2";
import { CiUser, CiFilter } from "react-icons/ci";
import { useSelector , useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";
import { clearFromWishlist } from "../../features/wishlist/wishlistSlice";

function Header({products}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [currentUser, setCurrentUser] = useState(() => {
    const user = localStorage.getItem("currentUser");
    return user ? JSON.parse(user) : null;
  });

  const [showUserMenu, setShowUserMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [showSearchResults, setShowSearchResults] = useState(false);

  const searchResults = products?.filter((product) => {
  const query = search.trim().toLowerCase();

  if (!query) {
    return false;
  }

  return (
    product.name?.toLowerCase().includes(query) ||
    product.category?.toLowerCase().includes(query) ||
    product.brand?.toLowerCase().includes(query)
  );
}).slice(0, 5);

  const handleLogout = () => {
  localStorage.removeItem("currentUser");

  dispatch(clearCart());
  dispatch(clearFromWishlist());

  setCurrentUser(null);
  setShowUserMenu(false);

  navigate("/products");
};

  const handleWishlistClick = () => {
    if (!currentUser) {
      navigate("/login");
      return;
    }

    navigate("/wishlist");
  };

  const quantity = useSelector((state) => state.cart.quantity);

  const countWishlist = useSelector(
    (state) => state.wishlist.wishlistItems.length
  );

  return (
    <div>
      <nav className="fixed top-0 left-0 w-full z-50 bg-surface/95 backdrop-blur-md border-b border-outline-variant">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="h-20 flex items-center justify-between">

            {/* LEFT */}

            <div className="flex items-center gap-8">

              {/* Mobile Menu */}

              <button
                type="button"
                className="md:hidden p-2 text-primary hover:opacity-60 transition-opacity"
              >
                <HiOutlineBars3 size={24} />
              </button>

              {/* Desktop Navigation */}

              <div className="hidden md:flex items-center gap-7">

                <NavLink
                  to="/products"
                  className={({ isActive }) => `font-label-caps text-label-caps transition-colors ${isActive ? "text-primary border-b border-primary pb-1" : "text-on-surface-variant hover:text-primary"}`}
                >
                  SHOP ALL
                </NavLink>

                <NavLink
                  to="/new"
                  className={({ isActive }) => `font-label-caps text-label-caps transition-colors ${isActive ? "text-primary border-b border-primary pb-1" : "text-on-surface-variant hover:text-primary"}`}
                >
                  NEW ARRIVALS
                </NavLink>

                <NavLink
                  to="/women"
                  className={({ isActive }) => `font-label-caps text-label-caps transition-colors ${isActive ? "text-primary border-b border-primary pb-1" : "text-on-surface-variant hover:text-primary"}`}
                >
                  WOMEN
                </NavLink>

                <NavLink
                  to="/men"
                  className={({ isActive }) => `font-label-caps text-label-caps transition-colors ${isActive ? "text-primary border-b border-primary pb-1" : "text-on-surface-variant hover:text-primary"}`}
                >
                  MEN
                </NavLink>

                <NavLink
                  to="/collection"
                  className={({ isActive }) => `font-label-caps text-label-caps transition-colors ${isActive ? "text-primary border-b border-primary pb-1" : "text-on-surface-variant hover:text-primary"}`}
                >
                  COLLECTIONS
                </NavLink>

              </div>
            </div>

            {/* CENTER LOGO */}

            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap group"
            >
              <div className="text-center">
                <span className="block font-headline-md text-xl sm:text-2xl font-bold tracking-[-0.04em] text-primary transition-opacity duration-300 group-hover:opacity-70">
                  Vogue &amp; Valour
                </span>
              </div>
            </Link>

            {/* RIGHT */}

            <div className="flex items-center gap-5 sm:gap-6 ml-auto">

              {/* SEARCH */}
              <div className="relative hidden lg:block">

  <div className="flex items-center gap-2 border-b border-outline focus-within:border-primary pb-1 transition-colors">

    <input
      type="text"
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        setShowSearchResults(true);
      }}
      onFocus={() => setShowSearchResults(true)}
      placeholder="SEARCH"
      className="w-32 bg-transparent border-none outline-none focus:ring-0 text-[10px] tracking-[0.18em] placeholder:text-on-surface-variant"
    />

    <IoSearchOutline
      size={18}
      className="text-on-surface-variant"
    />

  </div>

  {showSearchResults && search.trim() !== "" && (
    <div className="absolute top-full right-0 mt-4 w-80 bg-surface border border-outline-variant shadow-[0_15px_40px_rgba(0,0,0,0.12)] z-[100]">

      <div className="px-5 py-3 border-b border-outline-variant text-[9px] tracking-[0.2em] uppercase text-on-surface-variant">
        Search Results
      </div>

      {searchResults?.length > 0 ? (
        <div>

          {searchResults.map((product) => (
            <button
              key={product.id}
              type="button"
              onClick={() => {
                setSearch("");
                setShowSearchResults(false);
                navigate(`/product/${product.id}`);
              }}
              className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-surface-container transition-colors"
            >

              <img
                src={product.images?.main}
                alt={product.name}
                className="w-12 h-14 object-cover flex-shrink-0"
              />

              <div className="min-w-0">

                <p className="text-xs font-medium text-primary truncate">
                  {product.name}
                </p>

                <p className="mt-1 text-[10px] tracking-wider text-on-surface-variant">
                  {product.category}
                </p>

                <p className="mt-1 text-[10px] text-on-surface-variant">
                  ${product.price}
                </p>

              </div>

            </button>
          ))}

        </div>
      ) : (
        <div className="px-5 py-8 text-center text-[10px] tracking-[0.18em] uppercase text-on-surface-variant">
          No products found
        </div>
      )}

    </div>
  )}

</div>

              {/* FILTER */}

              <button
                type="button"
                onClick={() => navigate("/filter")}
                className="text-primary hover:opacity-60 transition-opacity cursor-pointer"
                aria-label="Filter products"
              >
                <CiFilter size={25} />
              </button>

              {/* WISHLIST */}

              <button
                type="button"
                onClick={handleWishlistClick}
                className="relative text-primary hover:opacity-60 transition-opacity"
                aria-label="Wishlist"
              >
                <IoHeartOutline size={23} />

                {countWishlist > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary text-on-primary text-[9px] flex items-center justify-center">
                    {countWishlist}
                  </span>
                )}
              </button>

              {/* CART */}

              <Link
                to="/cart"
                className="relative text-primary hover:opacity-60 transition-opacity"
                aria-label="Shopping bag"
              >
                <HiOutlineShoppingBag size={24} />

                {quantity > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary text-on-primary text-[9px] flex items-center justify-center">
                    {quantity}
                  </span>
                )}
              </Link>

              {/* USER */}

              {currentUser ? (
                <div className="relative">

                  <button
                    type="button"
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    className="flex items-center gap-2 text-primary hover:opacity-60 transition-opacity"
                  >
                    <CiUser size={24} />

                    <span className="hidden lg:block text-[10px] tracking-[0.16em] uppercase">
                      {currentUser.name}
                    </span>
                  </button>

                  {/* USER DROPDOWN */}

                  {showUserMenu && (
                    <div className="absolute right-0 top-full mt-5 w-52 bg-surface border border-outline-variant shadow-[0_15px_40px_rgba(0,0,0,0.10)] animate-fade-in">

                      <div className="px-5 py-4 border-b border-outline-variant">

                        <p className="text-[9px] tracking-[0.2em] uppercase text-on-surface-variant">
                          Signed in as
                        </p>

                        <p className="mt-1 text-sm font-medium text-primary">
                          Hello {currentUser.name}
                        </p>

                      </div>

                      <Link
                        to="/profile"
                        onClick={() => setShowUserMenu(false)}
                        className="flex items-center justify-between px-5 py-4 text-[10px] tracking-[0.18em] uppercase text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
                      >
                        PROFILE
                        <span>→</span>
                      </Link>

                      <Link
                        to="/cart"
                        onClick={() => setShowUserMenu(false)}
                        className="flex items-center justify-between px-5 py-4 text-[10px] tracking-[0.18em] uppercase text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors"
                      >
                        MY CART
                        <span>→</span>
                      </Link>

                      <button
                        type="button"
                        onClick={handleLogout}
                        className="w-full text-left px-5 py-4 border-t border-outline-variant text-[10px] tracking-[0.18em] uppercase text-red-500 hover:bg-red-50 transition-colors"
                      >
                        LOGOUT
                      </button>

                    </div>
                  )}

                </div>
              ) : (

                <Link
                  to="/login"
                  className="flex items-center gap-2 text-primary hover:opacity-60 transition-opacity"
                >
                  <IoLogInOutline size={22} />

                  <span className="hidden sm:block text-[10px] tracking-[0.18em] uppercase">
                    SIGN IN
                  </span>
                </Link>

              )}

            </div>

          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
