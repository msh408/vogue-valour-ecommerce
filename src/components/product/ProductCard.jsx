import React from "react";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaStar, FaStarHalfAlt, FaRegStar, FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import { addToCart } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToWishlist } from "../../features/wishlist/wishlistSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToWishlist = () => {
    const currentUser = localStorage.getItem("currentUser");

    if (!currentUser) {
      navigate("/login");
      return;
    }

    dispatch(addToWishlist(product));
  };

  // Discount
  const discount = product.compareAtPrice
    ? Math.round(
        ((product.compareAtPrice - product.price) /
          product.compareAtPrice) *
          100
      )
    : null;

  // Rating
  const rating = Number(product.rating) || 0;

  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars =
    5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="group relative inset-shadow-sm p-3">

      {/* Featured */}

      {product.isFeatured && (
        <span className="absolute top-4 left-4 z-10 bg-white/90 text-black px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] shadow-md">
          Featured
        </span>
      )}

      {/* New */}

      {product.isNew && (
        <span className="absolute top-4 right-4 z-10 bg-black text-white px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.2em] shadow-md">
          New
        </span>
      )}

      {/* Product Image */}

      <div className="aspect-square overflow-hidden relative">

        <img
          src={product.images?.main}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <button
          type="button"
          onClick={() => dispatch(addToCart(product))}
          className="absolute bottom-6 right-6 bg-black text-white px-6 py-3 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 rounded-full hover:bg-gray-800 hover:scale-105 active:scale-95 flex items-center gap-2"
        >
          <MdOutlineShoppingBag size={18} />
          Add to Bag
        </button>

      </div>

      {/* Product Information */}

      <div className="mt-5 space-y-2">

        {/* Wishlist */}

        <button
          type="button"
          onClick={handleAddToWishlist}
          className="text-2xl cursor-pointer"
          aria-label="Add to wishlist"
        >
          <IoHeartOutline />
        </button>

        {/* Category */}

        <p className="font-label-caps text-label-caps uppercase tracking-[0.2em] text-secondary">
          {product.category}
        </p>

        {/* Name */}

        <h3 className="font-headline-md text-headline-md text-primary">
          {product.name}
        </h3>

        {/* Rating */}

        <div className="flex items-center gap-1 text-yellow-500">

          {/* Full Stars */}

          {[...Array(fullStars)].map((_, i) => (
            <FaStar key={`full-${i}`} />
          ))}

          {/* Half Star */}

          {hasHalfStar && <FaStarHalfAlt />}

          {/* Empty Stars */}

          {[...Array(emptyStars)].map((_, i) => (
            <FaRegStar key={`empty-${i}`} />
          ))}

          <span className="text-primary">
            ({product.reviewCount})
          </span>

        </div>

        {/* Price */}

        <div>

          {product.compareAtPrice ? (
            <div className="flex items-center gap-3">

              <p className="font-body-md text-body-md text-primary line-through">
                ${product.compareAtPrice}
              </p>

              <p className="font-body-md text-body-md text-primary">
                ${product.price}
              </p>

            </div>
          ) : (
            <p className="font-body-md text-body-md text-primary">
              ${product.price}
            </p>
          )}

          {/* Discount */}

          {discount !== null && (
            <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1">
              -{discount}%
            </span>
          )}

        </div>

        {/* Stock */}

        <div className="mt-3">

          {product.totalStock > 0 ? (

            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 text-green-700 px-3 py-1 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <FaCheckCircle />
              In Stock ({product.stock})
            </span>

          ) : (

            <span className="inline-flex items-center gap-2 rounded-full bg-red-100 text-red-600 px-3 py-1 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <FaTimesCircle />
              Out of Stock
            </span>

          )}

        </div>

      </div>

    </div>
  );
}

export default ProductCard;