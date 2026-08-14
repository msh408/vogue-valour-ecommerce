import React, { useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import "../App.css";
import { clearCart } from "../features/cart/cartSlice";
import { clearFromWishlist } from "../features/wishlist/wishlistSlice";

function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [success, setSuccess] = useState("");

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  );

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.address.trim() ||
      !formData.city.trim() ||
      !formData.postalCode.trim()
    ) {
      setError("Please complete all required fields.");
      return;
    }

    setError("");

  console.log("Order information:", formData);
  console.log("Cart:", cartItems);

 dispatch(clearCart());
  dispatch(clearFromWishlist());

  setSuccess("Your order has been placed successfully.");

    };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = subtotal > 200 ? 0 : 15;

  const total = subtotal + shipping;

  return (
    <main className="min-h-screen bg-surface pt-28 pb-20 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] text-on-surface-variant uppercase mb-4">
            VOGUE & VALOUR
          </p>

          <h1 className="text-4xl md:text-5xl text-primary">
            Checkout
          </h1>

          <p className="mt-3 text-on-surface-variant">
            Complete your order and enter your shipping information.
          </p>
        </div>
     

        <form
          onSubmit={handleSubmit}
          className="grid lg:grid-cols-3 gap-12"
        >

          {/* LEFT SIDE */}

          <div className="lg:col-span-2 space-y-10">

            {/* Contact Information */}

            <section>
              <div className="flex items-center justify-between mb-6">

                <h2 className="text-xl text-primary">
                  Contact Information
                </h2>

                <span className="text-xs text-on-surface-variant">
                  Required
                </span>

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="checkout-input"
                />

                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="checkout-input"
                />

                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="checkout-input md:col-span-2"
                />

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="checkout-input md:col-span-2"
                />

              </div>
            </section>

            {/* Shipping Address */}

            <section className="border-t border-outline-variant pt-10">

              <h2 className="text-xl text-primary mb-6">
                Shipping Address
              </h2>

              <div className="space-y-6">

                <input
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Street Address"
                  className="checkout-input w-full"
                />

                <div className="grid md:grid-cols-2 gap-6">

                  <input
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="checkout-input"
                  />

                  <input
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    placeholder="Postal Code"
                    className="checkout-input"
                  />

                </div>

                <input
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country"
                  className="checkout-input w-full"
                />

              </div>
            </section>

            {/* Payment */}

            <section className="border-t border-outline-variant pt-10">

              <h2 className="text-xl text-primary mb-6">
                Payment
              </h2>

              <div className="border border-outline-variant p-6">

                <div className="flex items-center justify-between mb-6">

                  <span className="text-sm tracking-widest">
                    CARD PAYMENT
                  </span>

                  <span className="text-xs text-on-surface-variant">
                    SECURE CHECKOUT
                  </span>

                </div>

                <div className="space-y-6">

                  <input
                    type="text"
                    placeholder="Card Number"
                    className="checkout-input w-full"
                  />

                  <div className="grid grid-cols-2 gap-6">

                    <input
                      type="text"
                      placeholder="MM / YY"
                      className="checkout-input"
                    />

                    <input
                      type="text"
                      placeholder="CVC"
                      className="checkout-input"
                    />

                  </div>

                </div>
              </div>
            </section>

            {/* Error */}

            {error && (
              <p className="text-red-600 text-sm">
                {error}
              </p>
            )}

            {/* Place Order */}

            <button
              type="submit"
              className="w-full bg-primary text-on-primary py-5 tracking-[0.2em] text-sm hover:opacity-90 transition-opacity"
            >
              PLACE ORDER
            </button>

               {success && (
                <div className="mb-8 flex items-center gap-3 border border-green-200 bg-green-50 px-6 py-5 text-green-700">
                  <span className="material-symbols-outlined">
                    check_circle
                  </span>

                  <div>
                    <p className="font-medium">
                      Order placed successfully
                    </p>

                    <p className="text-sm opacity-80">
                      Thank you for shopping with Vogue &amp; Valour.
                    </p>
                  </div>
                </div>
                )}

            {/* Back */}

            <button
              type="button"
              onClick={() => navigate("/")}
              className="group inline-flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase text-on-surface-variant hover:text-primary transition-colors duration-300"
            >
              <IoArrowBackOutline
                className="text-base sm:text-lg transition-transform duration-300 group-hover:-translate-x-1"
              />

              <span>
                Back
              </span>
            </button>

          </div>

          {/* RIGHT SIDE - ORDER SUMMARY */}

          <aside className="lg:sticky lg:top-28 h-fit">

            <div className="border border-outline-variant p-6 md:p-8">

              <h2 className="text-xl text-primary mb-8">
                Order Summary
              </h2>

              {/* Products */}

              <div className="space-y-6">

                {cartItems.map((item) => (

                  <div
                    key={item.id}
                    className="flex gap-4"
                  >

                    <div className="w-20 h-24 bg-surface-container overflow-hidden shrink-0">

                      <img
                        src={item.images.main}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />

                    </div>

                    <div className="flex-1">

                      <h3 className="text-sm">
                        {item.name}
                      </h3>

                      <p className="text-xs text-on-surface-variant mt-2">
                        Quantity: {item.quantity}
                      </p>

                      <p className="text-sm mt-2">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

              {/* Prices */}

              <div className="border-t border-outline-variant mt-8 pt-6 space-y-4">

                <div className="flex justify-between text-sm">

                  <span className="text-on-surface-variant">
                    Subtotal
                  </span>

                  <span>
                    ${subtotal.toFixed(2)}
                  </span>

                </div>

                <div className="flex justify-between text-sm">

                  <span className="text-on-surface-variant">
                    Shipping
                  </span>

                  <span>
                    {shipping === 0
                      ? "FREE"
                      : `$${shipping.toFixed(2)}`}
                  </span>

                </div>

                <div className="border-t border-outline-variant pt-5 flex justify-between">

                  <span className="text-lg">
                    Total
                  </span>

                  <span className="text-xl text-primary">
                    ${total.toFixed(2)}
                  </span>

                </div>

              </div>

              {/* Edit Cart */}

              <Link
                to="/cart"
                className="block text-center mt-6 text-xs tracking-widest underline underline-offset-4"
              >
                EDIT CART
              </Link>

            </div>

          </aside>

        </form>
      </div>
    </main>
  );
}

export default Checkout;