import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { MdOutlineShoppingBag } from "react-icons/md";

function Collection({ products }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const accessories = products.filter((item) =>
    item.tags?.includes("accessories")
  );

  const handleAddToCart = (e, product) => {
    e.stopPropagation();

    const currentUser = localStorage.getItem("currentUser");

    if (!currentUser) {
      navigate("/login");
      return;
    }

    dispatch(addToCart(product));
  };

  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}

        <div className="mb-10 md:mb-14">

          <p className="font-label-caps text-label-caps tracking-[0.3em] text-on-surface-variant uppercase mb-3">
            Curated Collection
          </p>

          <h1 className="font-headline-lg text-headline-lg text-primary">
            Accessories
          </h1>

          <p className="mt-3 max-w-xl text-on-surface-variant font-body-md text-body-md">
            Discover our curated selection of accessories designed to
            complete your modern wardrobe.
          </p>

        </div>

        {/* Products */}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-10 md:gap-x-6 md:gap-y-14">

          {accessories.map((item) => (

            <div
              key={item.id}
              className="group cursor-pointer"
            >

              {/* Image */}

              <div className="relative aspect-[3/4] overflow-hidden bg-surface-variant">

                <img
                  src={item.images.main}
                  alt={item.images.alt || item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover Overlay */}

                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* New Badge */}

                {item.isNew && (
                  <span
                    className="absolute top-3 left-3 bg-white text-black px-3 py-1 text-[10px] tracking-widest uppercase"
                  >
                    New
                  </span>
                )}

                {/* Add To Bag */}

                <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">

                  <button
                    type="button"
                    onClick={(e) => handleAddToCart(e, item)}
                    className="w-full bg-surface text-primary py-4 font-label-caps text-label-caps flex items-center justify-center gap-2 hover:bg-primary hover:text-on-primary transition-colors"
                  >
                    <MdOutlineShoppingBag size={18} />
                    ADD TO BAG
                  </button>

                </div>

              </div>

              {/* Product Info */}

              <div className="mt-4">

                <p className="text-xs uppercase tracking-widest text-on-surface-variant mb-1">
                  {item.brand}
                </p>

                <h2
                  className="font-body-md text-body-md text-primary group-hover:opacity-70 transition-opacity"
                >
                  {item.name}
                </h2>

                <p className="mt-2 font-body-md text-body-md text-primary">
                  ${item.price}
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* Empty State */}

        {accessories.length === 0 && (
          <div className="py-20 text-center">

            <p className="text-on-surface-variant">
              No accessories found.
            </p>

          </div>
        )}

      </div>
    </section>
  );
}

export default Collection;