import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  removeFromCart,
  clearCart,
} from "../features/cart/cartSlice";
import { AiOutlineDelete, AiOutlineShoppingCart } from "react-icons/ai";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function CartPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItem = useSelector(
    (state) => state.cart.cartItems
  );

  const quantity = useSelector(
    (state) => state.cart.quantity
  );

  const subTotal = cartItem.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const tax = subTotal * 0.03;
  const shipping = 45;
  const total = subTotal + shipping + tax;

  return (
    <main className="pt-32 pb-section-gap">
      <div className="max-w-[1440px] mx-auto px-margin-desktop">

        {/* Header */}

        <header className="mb-16">
          <h1 className="font-headline-lg text-headline-lg mb-2">
            Shopping Bag
          </h1>

          <p className="font-body-md text-on-surface-variant">
            {quantity} items in your selection
          </p>
        </header>

        <div className="grid grid-cols-12 gap-gutter items-start">

          {/* Items List */}

          <section className="col-span-12 lg:col-span-8">

            <div className="flex flex-col">

              <div className="flex flex-col shadow-2xl justify-between items-center mb-6">

                <h2 className="text-lg font-medium">
                  Your Items
                </h2>

                {/* Empty Cart */}

                {cartItem.length === 0 ? (

                  <p className="flex items-center gap-3.5 p-2">
                    Your cart is empty
                    <AiOutlineShoppingCart />
                  </p>

                ) : (

                  <>
                    {cartItem.map((item) => (

                      <div
                        key={item.id}
                        className="flex flex-col md:flex-row gap-gutter py-8 border-b border-outline-variant items-start w-full"
                      >

                        {/* Product Image */}

                        <div className="w-28 md:w-36 px-2 aspect-square flex-shrink-0 bg-gray-100 rounded-xl overflow-hidden">
                          <img
                            src={item.images.main}
                            alt={item.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        {/* Product Information */}

                        <div className="flex-grow flex flex-col justify-between h-auto md:h-64 py-2">

                          <div className="flex justify-between items-start">

                            <div>

                              <h3 className="font-label-caps text-label-caps mb-1 opacity-60">
                                {item.brand}
                              </h3>

                              <h2 className="font-headline-md text-headline-md leading-tight">
                                {item.name}
                              </h2>

                              <p className="font-body-md text-on-surface-variant mt-2">
                                {item.sku}
                              </p>

                            </div>

                          </div>

                          {/* Quantity + Price */}

                          <div className="flex items-center justify-between gap-6">

                            {/* Quantity + Remove */}

                            <div className="flex items-center gap-3">

                              {/* Quantity */}

                              <div className="flex items-center border border-gray-200 rounded-full overflow-hidden bg-white shadow-sm">

                                <button
                                  type="button"
                                  onClick={() =>
                                    dispatch(decrement(item.id))
                                  }
                                  className="w-9 h-9 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-black transition-all duration-200"
                                >
                                  −
                                </button>

                                <span className="w-9 text-center text-sm font-medium text-gray-800">
                                  {item.quantity}
                                </span>

                                <button
                                  type="button"
                                  onClick={() =>
                                    dispatch(increment(item.id))
                                  }
                                  className="w-9 h-9 flex items-center justify-center text-gray-500 hover:bg-gray-100 hover:text-black transition-all duration-200"
                                >
                                  +
                                </button>

                              </div>

                              {/* Remove */}

                              <button
                                type="button"
                                onClick={() =>
                                  dispatch(removeFromCart(item.id))
                                }
                                className="group w-9 h-9 flex items-center justify-center rounded-full text-gray-400 hover:text-red-500 hover:bg-red-50 transition-all duration-300"
                                aria-label="Remove item"
                              >
                                <AiOutlineDelete
                                  size={18}
                                  className="group-hover:scale-110 transition-transform duration-300"
                                />
                              </button>

                            </div>

                            {/* Price */}

                            <div className="text-right">

                              <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                                Price
                              </p>

                              <span className="font-headline-md text-[22px] font-medium text-gray-900">
                                ${(item.price * item.quantity).toFixed(2)}
                              </span>

                            </div>

                          </div>

                        </div>

                      </div>

                    ))}
                  </>

                )}

              </div>

              {/* Clear Cart */}

              {cartItem.length > 0 && (

                <div className="flex justify-end mt-8 pt-6 border-t border-gray-200">

                  <button
                    type="button"
                    onClick={() => dispatch(clearCart())}
                    className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-gray-300 text-gray-600 text-sm font-medium tracking-wide hover:border-red-300 hover:text-red-600 hover:bg-red-50/60 transition-all duration-300"
                  >
                    <AiOutlineDelete
                      size={17}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />

                    <span>
                      Clear Cart
                    </span>
                  </button>

                </div>

              )}

            </div>

            {/* Continue Shopping */}

            <div className="mt-12 group cursor-pointer inline-flex items-center gap-4">

              <button
                type="button"
                onClick={() => navigate(-1)}
                className="group"
              >
                <span className="material-symbols-outlined group-hover:-translate-x-2 transition-transform">
                  arrow_back
                </span>
              </button>

              <NavLink
                to="/products"
                className="font-label-caps text-label-caps"
              >
                Continue Shopping
              </NavLink>

            </div>

          </section>

          {/* Order Summary */}

          <aside className="col-span-12 lg:col-span-4 bg-surface-container-low p-8 lg:sticky lg:top-32">

            <h2 className="font-label-caps text-label-caps mb-8 border-b border-outline-variant pb-4">
              Order Summary
            </h2>

            <div className="space-y-4 mb-8">

              <div className="flex justify-between items-center">
                <span className="font-body-md text-on-surface-variant">
                  Subtotal
                </span>

                <span className="font-body-md">
                  ${subTotal.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-body-md text-on-surface-variant">
                  Estimated Shipping
                </span>

                <span className="font-body-md">
                  ${shipping.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-body-md text-on-surface-variant">
                  Tax
                </span>

                <span className="font-body-md">
                  ${tax.toFixed(2)}
                </span>
              </div>

            </div>

            {/* Total */}

            <div className="flex justify-between items-center border-t border-outline-variant pt-6 mb-10">

              <span className="font-headline-md text-[24px]">
                Total
              </span>

              <span className="font-headline-md text-[24px]">
                ${total.toFixed(2)}
              </span>

            </div>

            {/* Checkout */}

            <div className="space-y-4">

              <Link
                to="/checkout"
                className="w-full bg-primary text-white py-5 font-label-caps text-label-caps tracking-widest hover:bg-opacity-90 transition-all flex items-center justify-center"
              >
                Proceed to Checkout
              </Link>

              <div className="flex items-center justify-center gap-4 py-2">

                <img
                  alt="PayPal"
                  className="h-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRT_xBU1GwbdoKjmE5Ce1SyM1x9TEnfeNcn0ZUmFHVNn5PJckfPNMoZqaGNZrjttvjqsfAz2X9AI0-kIYFRAgAtefgVILQJzqHN12c_BRjbVbVJxj6cvL_LkoU6rw0I2Ei8nnQoZszdRflGu8tWxGfQMUqZgRw8sxleINDTqJ7WTHmoFCFRkntfu2SC1UUa6z7b4MIlSFoZ4DF69kUDCMuCn3xPqufSuOAm43EovW2zJSbr-lE7jMi"
                />

                <img
                  alt="Visa"
                  className="h-3 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj7LMqGDa0LC_xYHBH8HBlkhYqLeDlHhbQ3THJIv7rKOGwn51pVdMoyHafsVGV2tV5uyX67bWcIQnTU5T8gVilxo5ii3-kTVbae_JXFd69usXkpqpKadosVKrK9eRm8Lc-e9KMilZWlGiwHn91Dpxiv7lfeZv7763Sz0DuJskPzmjVM1IGM--9IB_Nfj-S2DEUhUeMui8qj2YR94pF0VIb6jbRfEyzk9b5npY-z8nzgfDTXKoQ-Ehg"
                />

                <img
                  alt="Mastercard"
                  className="h-6 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuACv4UIMzS5uK406o3EDL-NZrT40UFafzqm_Xzq4UmZ1h_digsr46ssrdUwZ2Eaz3JITcDXmyKcNwbjmjXiNDB9t_YFs9SYsOMN93bSUchVjWR0ZtaQuYu5u_stsvmo5IvruFapKv4S-6Al_UvOzsIL00MayC12vC1AYKKM59q2Vri9vd51_mBGP4Pr8OtWGZ7jN7qLJH9bP5LvE4FqFFu8DMr6LpegSTZ5Ihun7ncA5JnQKQQutzCL"
                />

              </div>

            </div>

            {/* Gift Wrapping */}

            <div className="mt-8 pt-8 border-t border-outline-variant">

              <p className="font-label-sm text-label-sm text-on-surface-variant italic leading-relaxed text-center">
                Complimentary luxury gift wrapping included with every order.
              </p>

            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}