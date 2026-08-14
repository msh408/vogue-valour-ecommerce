import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { MdOutlineShoppingBag } from "react-icons/md";

function NewProducts({ products }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newProducts = products.filter(
    (item) => item.isNew
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">

        {newProducts.map((item) => (
          <div
            key={item.id}
            className="group"
          >

            {/* Image */}

            <div className="relative w-full aspect-[3/4] overflow-hidden bg-surface-variant">

              <img
                src={item.images.main}
                alt={item.images.alt || item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* New Badge */}

              {item.isNew && (
                <span
                  className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 font-label-caps text-[10px] tracking-widest"
                >
                  NEW
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

            <div className="pt-4">

              <h2 className="font-headline-sm text-headline-sm group-hover:text-primary transition-colors">
                {item.name}
              </h2>

              <div className="flex items-center justify-between mt-2">

                <p className="font-body-md text-body-md text-on-surface-variant">
                  ${item.price}
                </p>

                {item.brand && (
                  <span className="font-label-caps text-[10px] tracking-widest text-on-surface-variant">
                    {item.brand}
                  </span>
                )}

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default NewProducts;