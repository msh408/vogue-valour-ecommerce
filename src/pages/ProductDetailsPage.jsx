import ProductCard from "../components/product/ProductCard";
import React from "react";
import { NavLink, useParams , Link , useNavigate } from "react-router-dom";
import { addToCart } from "../features/cart/cartSlice";
import {useDispatch} from 'react-redux'
import { addToWishlist } from "../features/wishlist/wishlistSlice";


export default function ProductDetailsPage({products}) {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const product = products.find(
    (p) => p.id === Number(id)
    );
     console.log(product);

  if (!product) {
    return <h2>Loading...</h2>;
  }
return (
  <div>

    {/* Breadcrumb */}
    <nav className="flex items-center gap-2 text-sm text-gray-500 p-4">
      <span>Home</span>
      <span>/</span>
      <span>Collections</span>
      <span>/</span>
      <span>Outerwear</span>
      <span>/</span>

      <span className="text-primary sm:hidden">
        Cashmere Coat
      </span>

      <span className="hidden sm:inline">
        Double-Breasted Cashmere Coat
      </span>
    </nav>

    {/* Product Hero Grid */}
    <div className="grid grid-cols-12 gap-gutter items-start">

      {/* Image Gallery */}
      <div className="col-span-12 lg:col-span-7">
        <div className="grid grid-cols-1 px-2.5 sm:grid-cols-2 gap-5 lg:gap-6">

          {product.images.gallery.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl bg-gray-100"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Sticky Details Panel */}
      <div className="col-span-12 md:col-span-5 sticky sticky-details">

        <div className="space-y-8">

          <header>

            <p className="font-label-caps text-label-caps text-on-tertiary-container mb-2">
              {product.category}
            </p>

            <h1 className="font-headline-lg text-headline-lg text-primary mb-4 leading-none">
              {product.name}
            </h1>

            <div className="flex items-center gap-3">

              {product.compareAtPrice && (
                <span className="font-body-lg text-body-lg text-secondary line-through">
                  ${product.compareAtPrice}
                </span>
              )}

              <span className="font-body-lg text-body-lg text-secondary">
                ${product.price}
              </span>

            </div>

          </header>

          <div className="space-y-6">

            {/* Description */}
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {product.description}
            </p>

            {/* Color Selection */}
            <div className="space-y-3">

              <span className="font-label-caps text-label-caps text-primary">
                Color: Charcoal Noir
              </span>

              <div className="flex gap-4">

                <button
                  className="w-10 h-10 rounded-full bg-primary-container ring-1 ring-offset-2 ring-amber-100 border border-white hover:scale-110 hover:shadow-md transition-all duration-300"
                />

                <button
                  className="w-10 h-10 rounded-full bg-[#E5E2E1] hover:ring-1 hover:ring-offset-2 hover:ring-outline transition-all hover:scale-110 hover:shadow-md duration-300"
                />

                <button
                  className="w-10 h-10 rounded-full bg-[#3E4040] hover:ring-1 hover:ring-offset-2 hover:ring-outline transition-all hover:scale-110 hover:shadow-md duration-300"
                />

              </div>

            </div>

            {/* Size Selection */}
            {product.availableSizes.length > 0 && (
              <div className="space-y-3">

                <div className="flex justify-between">

                  <span className="font-label-caps text-label-caps text-primary">
                    Select Size
                  </span>

                  <button className="font-label-caps text-label-caps text-on-surface-variant underline hover:text-primary">
                    Size Guide
                  </button>

                </div>

                <div className="grid grid-cols-4 gap-2">

                  {product.availableSizes.map((size, index) => (
                    <button key={index}>
                      {size}
                    </button>
                  ))}

                </div>

              </div>
            )}

            {/* Actions */}
            <div className="space-y-4 pt-4">

              <button
                className="w-full bg-primary text-on-primary py-5 font-label-caps text-label-caps tracking-widest hover:bg-opacity-90 transition-all flex items-center justify-center gap-3"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Bag

                <span className="material-symbols-outlined text-[18px]">
                  shopping_bag
                </span>
              </button>

              <button
                className="cursor-pointer w-full border border-primary text-primary py-5 font-label-caps text-label-caps tracking-widest hover:bg-surface-container transition-all flex items-center justify-center gap-3"
                onClick={() => dispatch(addToWishlist(product))}
              >
                Add to Wishlist

                <span className="material-symbols-outlined text-[18px]">
                  favorite
                </span>
              </button>

            </div>

            {/* Product Specs */}
            <div className="pt-10 border-t border-outline-variant space-y-4">

              <details className="group">

                <summary className="list-none flex justify-between items-center cursor-pointer py-2">

                  <span className="font-label-caps text-label-caps text-primary">
                    Fabric &amp; Origin
                  </span>

                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                    expand_more
                  </span>

                </summary>

                <div className="pt-4 pb-2 text-on-surface-variant">
                  <p className="font-body-md text-body-md">
                    100% Loro Piana sourced cashmere. Lining: 100% Silk Twill. Made in Italy with artisan precision. Dry clean only.
                  </p>
                </div>

              </details>

              <details className="group">

                <summary className="list-none flex justify-between items-center cursor-pointer py-2 border-t border-outline-variant">

                  <span className="font-label-caps text-label-caps text-primary">
                    Fit &amp; Measurements
                  </span>

                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                    expand_more
                  </span>

                </summary>

                <div className="pt-4 pb-2 text-on-surface-variant">
                  <p className="font-body-md text-body-md">
                    Designed for an oversized, architectural fit. Those who prefer a closer fit may wish to take one size smaller than usual.
                  </p>
                </div>

              </details>

              <details className="group">

                <summary className="list-none flex justify-between items-center cursor-pointer py-2 border-t border-outline-variant">

                  <span className="font-label-caps text-label-caps text-primary">
                    Shipping &amp; Concierge
                  </span>

                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">
                    expand_more
                  </span>

                </summary>

                <div className="pt-4 pb-2 text-on-surface-variant">
                  <p className="font-body-md text-body-md">
                    Complimentary global white-glove shipping. Returns accepted within 14 days of receipt.
                  </p>
                </div>

              </details>

            </div>

          </div>

        </div>

      </div>

    </div>

    {/* Complete the Look */}
  <section className="mt-24">

  {/* Header */}

  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 p-4">

    <div>

      <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
        Curated Essentials
      </span>

      <h2 className="text-4xl md:text-5xl font-serif mt-2">
        Complete the Look
      </h2>

    </div>

    <a
      href="#"
      className="text-sm uppercase tracking-[0.2em] border-b border-black pb-1 hover:opacity-70 transition"
    >
      Shop the Collection
    </a>

  </div>

  {/* Products */}

  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 p-4">

    {products
      .filter((item) =>
        product.relatedProductIds?.includes(item.id)
      )
      .map((item) => (

        <div
          key={item.id}
          className="group cursor-pointer transition-all duration-500 hover:-translate-y-2"
        >

          {/* Image */}

          <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-100 shadow-sm">

            <img
              src={item.images.main}
              alt={item.images.alt || item.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Add To Bag */}

            <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();

                  const currentUser =
                    localStorage.getItem("currentUser");

                  if (!currentUser) {
                    navigate("/login");
                    return;
                  }

                  dispatch(addToCart(item));
                }}
                className="w-full bg-white text-black py-3 text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-colors duration-300"
              >
                ADD TO BAG
              </button>

            </div>

          </div>

          {/* Content */}

          <div className="mt-5 space-y-2">

            <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500">
              {item.category}
            </p>

            <h3 className="text-sm md:text-base text-gray-900 transition-colors duration-300 group-hover:text-gray-500">
              {item.name}
            </h3>

            <p className="text-sm font-medium tracking-wide">
              ${item.price}
            </p>

          </div>

        </div>

      ))}

  </div>

</section>
  </div>
);

}