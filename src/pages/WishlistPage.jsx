import { useSelector, useDispatch } from "react-redux";
import {
  addToCart,
} from "../features/cart/cartSlice";
import {
  removeFromWishlist,
  clearFromWishlist,
} from "../features/wishlist/wishlistSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";

export default function WishlistPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const wishlistItem = useSelector(
    (state) => state.wishlist.wishlistItems
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      return;
    }

    const savedEmails =
      JSON.parse(
        localStorage.getItem("newsletterEmails")
      ) || [];

    if (!savedEmails.includes(email.trim())) {
      savedEmails.push(email.trim());

      localStorage.setItem(
        "newsletterEmails",
        JSON.stringify(savedEmails)
      );
    }

    setMessage(
      "Thank you for joining our inner circle."
    );

    setEmail("");
  };

  return (
    <div className="bg-surface text-on-surface font-body-md overflow-x-hidden">
      <main className="pt-20">

        {/* Hero Section */}

        <section className="max-w-[1440px] mx-auto px-margin-desktop py-16 animate-fade-in">

          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-outline-variant pb-8">

            <div className="max-w-2xl">

              <h1 className="font-headline-xl text-headline-xl mb-4">
                The Wishlist
              </h1>

              <p className="font-body-lg text-body-lg text-on-surface-variant">
                A curated selection of your most coveted pieces.
                Timeless silhouettes and modern craftsmanship,
                reserved for your consideration.
              </p>

            </div>

            <div className="mt-8 md:mt-0 flex space-x-4">

              <button
                type="button"
                className="font-label-caps text-label-caps border border-primary px-8 py-3 hover:bg-primary hover:text-on-primary transition-all duration-300"
              >
                Share Collection
              </button>

              <button
                type="button"
                onClick={() => navigate("/products")}
                className="font-label-caps text-label-caps bg-primary text-on-primary px-8 py-3 hover:opacity-90 transition-opacity"
              >
                Shop All Saved
              </button>

            </div>

          </div>
        </section>

        {/* Wishlist Grid */}

        <section className="max-w-[1440px] mx-auto px-margin-desktop pb-section-gap">

          <div>

            {wishlistItem.length === 0 ? (

              /* Empty State */

              <div
                onClick={() => navigate("/products")}
                className="hidden lg:flex flex-col space-y-4 border border-dashed border-outline-variant items-center justify-center w-64 h-72 p-8 text-center group cursor-pointer"
              >

                <span className="material-symbols-outlined text-4xl mb-4 text-outline">
                  add
                </span>

                <h3 className="font-headline-md text-headline-md">
                  Add More
                </h3>

                <p className="font-body-md text-on-surface-variant mb-6">
                  Continue exploring our latest collections to find your
                  next statement piece.
                </p>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/products");
                  }}
                  className="font-label-caps text-label-caps underline group-hover:text-primary transition-colors"
                >
                  Browse Collections
                </button>

              </div>

            ) : (

              /* Wishlist Products */

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">

                {wishlistItem.map((item) => (

                  <div
                    key={item.id}
                    className="wishlist-card group relative flex flex-col space-y-4"
                  >

                    {/* Image */}

                    <div className="relative overflow-hidden aspect-[3/4] bg-surface-container-low">

                      <img
                        src={item.images?.main}
                        alt={item.name}
                        data-alt={item.name}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Quick Add */}

                      <div className="wishlist-overlay absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-300 flex items-center justify-center">

                        <button
                          type="button"
                          onClick={() =>
                            dispatch(addToCart(item))
                          }
                          className="bg-surface-container-lowest text-primary p-4 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                          aria-label="Add to cart"
                        >
                          <span className="material-symbols-outlined">
                            shopping_bag
                          </span>
                        </button>

                      </div>

                      {/* Remove */}

                      <button
                        type="button"
                        onClick={() =>
                          dispatch(removeFromWishlist(item.id))
                        }
                        className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full backdrop-blur-md text-primary shadow-sm transition-all duration-300 hover:bg-red-500 hover:text-white hover:shadow-lg hover:scale-110 active:scale-95"
                        aria-label="Remove item from wishlist"
                      >
                        <IoIosCloseCircleOutline size={20} />
                      </button>

                      {/* Badge */}

                      <div className="absolute bottom-4 left-4">

                        <span className="bg-tertiary text-on-tertiary px-2 py-1 font-label-caps text-[10px]">
                          NEW ARRIVAL
                        </span>

                      </div>

                    </div>

                    {/* Product Info */}

                    <div className="flex flex-col space-y-1">

                      <span className="font-label-caps text-label-sm text-secondary tracking-widest uppercase">
                        Signature Collection
                      </span>

                      <h3 className="font-body-md text-body-md font-bold">
                        {item.name}
                      </h3>

                      <p className="font-body-md text-body-md">
                        ${item.price}
                      </p>

                    </div>

                    {/* Add To Bag */}

                    <button
                      type="button"
                      onClick={() => dispatch(addToCart(item))}
                      className="w-full bg-primary text-on-primary py-4 font-label-caps text-label-caps hover:bg-on-surface-variant transition-colors"
                    >
                      Add to Bag
                    </button>

                  </div>

                ))}

              </div>

            )}

            {/* Clear Wishlist */}

            {wishlistItem.length > 0 && (
              <button
                type="button"
                onClick={() => dispatch(clearFromWishlist())}
                className="cursor-pointer mt-8 group flex items-center gap-2 px-4 py-2 border border-outline-variant text-xs uppercase tracking-[0.2em] text-on-surface-variant hover:border-red-400 hover:text-red-500 transition-all duration-300"
              >
                <IoTrashOutline
                  size={16}
                  className="transition-transform duration-300 group-hover:rotate-12"
                />

                Clear Wishlist
              </button>
            )}

          </div>
        </section>

        {/* Newsletter / Editorial Callout */}

        <section className="bg-surface-container-low py-section-gap">

          <div className="max-w-[1440px] mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">

            {/* Editorial Image */}

            <div className="md:col-span-7 group w-full h-[500px] object-cover relative overflow-hidden rounded-2xl">

              <img
                src="/images/lookbook/fashion-week.png"
                alt="Fashion runway"
                className="w-full h-full object-cover grayscale brightness-90 transition-transform duration-700 ease-out group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-70" />

              <div className="absolute bottom-6 left-6 text-white">

                <p className="text-xs uppercase tracking-[0.3em] opacity-80">
                  Editorial
                </p>

                <h3 className="mt-2 text-2xl font-medium">
                  The Art of Fashion
                </h3>

              </div>

            </div>

            {/* Newsletter Content */}

            <div className="md:col-span-5 flex flex-col justify-center space-y-8 mt-12 md:mt-0 md:pl-8">

              <div className="space-y-4">

                <span className="text-xs uppercase tracking-[0.3em] text-on-surface-variant">
                  The Inner Circle
                </span>

                <h2 className="font-headline-lg text-headline-lg leading-tight">
                  Stay Ahead of the Curve.
                </h2>

                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-lg">
                  Join our inner circle for early access to seasonal drops,
                  exclusive editorial content, and private sale invitations.
                </p>

              </div>

              {/* Newsletter Form */}

              <form
                onSubmit={handleSubmit}
                className="space-y-3"
              >

                <div className="flex items-center border-b-2 border-primary py-3 transition-all duration-300 focus-within:border-on-surface">

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="YOUR EMAIL ADDRESS"
                    className="flex-1 bg-transparent border-none outline-none focus:ring-0 font-label-caps text-label-caps placeholder:text-on-surface-variant placeholder:opacity-70"
                  />

                  <button
                    type="submit"
                    className="group flex items-center gap-2 font-label-caps text-label-caps font-semibold hover:opacity-60 transition-all duration-300"
                  >
                    JOIN

                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>

                </div>

                <p className="text-xs text-on-surface-variant opacity-70">
                  By subscribing, you agree to receive updates from Vogue
                  & Valour.
                </p>

                {message && (
                  <p className="text-sm text-on-surface-variant animate-fade-in">
                    {message}
                  </p>
                )}

              </form>

            </div>

          </div>
        </section>

      </main>
    </div>
  );
}