import React from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import ProductsHeader from "./ProductsHeader";
import { useSelector } from "react-redux";
import useSortedProducts from "../../hooks/useSortedProducts";
import useFilterProducts from "../../hooks/useFilterProducts";
import Newsletter from "../newsletter/NewsLetter";
import { isLoggedIn } from "../../local/LocalStorageUser";

function ProductList({ products }) {
  const navigate = useNavigate();

  const sortBy = useSelector((state) => state.filter.sortBy);
  const category = useSelector((state) => state.filter.Category);

  // Filter products
  const filteredProducts = useFilterProducts(
    products,
    category
  );

  // Sort products
  const sortedProducts = useSortedProducts(
    filteredProducts,
    sortBy
  );

  const handleProductClick = (productId) => {
    if (!isLoggedIn()) {
      navigate("/login");
      return;
    }

    navigate(`/product/${productId}`);
  };

  return (
    <>
      {/* Hero Section */}

      <section className="relative min-h-[520px] sm:min-h-[600px] lg:min-h-[680px] overflow-hidden">
        <div className="absolute inset-0">

          <img
            src="/images/banners/online_image_35.png"
            alt="Autumn Winter editorial"
            className="absolute inset-0 w-full h-full object-cover object-center scale-105 transition-transform duration-[10000ms] hover:scale-100"
          />

          <div className="absolute inset-0 bg-black/25" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto min-h-[520px] sm:min-h-[600px] lg:min-h-[680px] px-5 sm:px-8 lg:px-12 flex items-center">
          <div className="max-w-2xl text-white">

            <span className="block mb-4 sm:mb-6 text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] uppercase font-medium">
              THE EDITORIAL SERIES
            </span>

            <h1 className="font-headline-xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-5 sm:mb-7">
              Autumn / Winter '24
            </h1>

            <p className="max-w-xl text-base sm:text-lg lg:text-xl leading-relaxed text-white/90">
              A meticulous exploration of form and materiality.
              High-contrast silhouettes meeting the softest textures
              of fine-spun luxury.
            </p>

          </div>
        </div>
      </section>

      {/* Header + Filters */}

      <ProductsHeader products={sortedProducts} />

      {/* Products Grid */}

      <div className="grid grid-cols-2 gap-5 p-3 md:grid-cols-3 lg:grid-cols-4 mt-2">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product.id)}
            className="cursor-pointer"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Newsletter Section */}

      <section className="bg-primary text-on-primary py-12 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-4 gap-2 items-center">

          {/* Newsletter */}

          <div className="w-full md:col-span-2">
            <Newsletter />
          </div>

          {/* Image 1 */}

          <div className="aspect-square overflow-hidden bg-surface-container md:col-span-1">
            <img
              src="/images/editorial/fashion.png"
              alt="Luxury fashion editorial"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 2 */}

          <div className="aspect-square overflow-hidden bg-surface-container md:col-span-1">
            <img
              src="/images/editorial/watch-lifestyle.png"
              alt="Luxury accessories editorial"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* Decorative Texture */}

        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent" />
        </div>
      </section>
    </>
  );
}

export default ProductList;