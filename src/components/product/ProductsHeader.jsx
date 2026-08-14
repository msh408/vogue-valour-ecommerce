import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSortBy,
  setToggleCategory,
} from "../../features/filters/filtersSlice";

function ProductsHeader({ products }) {
  const dispatch = useDispatch();

  const sortBy = useSelector(
    (state) => state.filter.sortBy
  );

  const category = useSelector(
    (state) => state.filter.Category
  );

  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value));
  };

  const handleCategoryChange = (e) => {
    dispatch(setToggleCategory(e.currentTarget.value));
  };

  return (
    <>
      {/* Header / Sort */}

      <section className="max-w-[1440px] mx-auto px-margin-desktop py-8 mt-2">
        <div className="flex flex-col gap-6 items-center text-center md:flex-row md:justify-between md:items-end md:text-left mb-16">

          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary">
              The Curated Gallery
            </h2>

            <p className="mt-2 text-sm sm:text-base text-on-surface-variant">
              Showing {products?.length || 0} pieces
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3">

            <span className="text-sm uppercase tracking-wider">
              Sort By:
            </span>

            <select
              value={sortBy}
              onChange={handleSortChange}
              className="bg-transparent border border-outline rounded px-3 py-2"
            >
              <option value="recommended">
                Recommended
              </option>

              <option value="newest">
                Newest
              </option>

              <option value="price-low">
                Price: Low to High
              </option>

              <option value="price-high">
                Price: High to Low
              </option>
            </select>

          </div>
        </div>
      </section>

      {/* Category Filter Chips */}

      <section className="bg-surface sticky top-20 z-40 border-b border-outline-variant">
        <div className="max-w-[1440px] mx-auto px-margin-desktop overflow-x-auto hide-scrollbar">

          <div className="flex items-center gap-10 h-16 whitespace-nowrap">

            {/* All Collections */}

            <button
              type="button"
              onClick={handleCategoryChange}
              value="all-collection"
              className={`h-full flex items-center ${category === "all-collection" ? "font-label-caps text-primary border-b-2 border-primary" : "font-label-caps text-on-surface-variant hover:text-primary transition-colors"}`}
            >
              All Collections
            </button>

            {/* Tops */}

            <button
              type="button"
              onClick={handleCategoryChange}
              value="Tops"
              className={`h-full flex items-center ${category === "Tops" ? "font-label-caps text-primary border-b-2 border-primary" : "font-label-caps text-on-surface-variant hover:text-primary transition-colors"}`}
            >
              Tops
            </button>

            {/* Dresses */}

            <button
              type="button"
              onClick={handleCategoryChange}
              value="Dresses"
              className={`h-full flex items-center ${category === "Dresses" ? "font-label-caps text-primary border-b-2 border-primary" : "font-label-caps text-on-surface-variant hover:text-primary transition-colors"}`}
            >
              Dresses
            </button>

            {/* Blazers */}

            <button
              type="button"
              onClick={handleCategoryChange}
              value="Blazers"
              className={`h-full flex items-center ${category === "Blazers" ? "font-label-caps text-primary border-b-2 border-primary" : "font-label-caps text-on-surface-variant hover:text-primary transition-colors"}`}
            >
              Blazers
            </button>

            {/* Outerwear */}

            <button
              type="button"
              onClick={handleCategoryChange}
              value="Outerwear"
              className={`h-full flex items-center ${category === "Outerwear" ? "font-label-caps text-primary border-b-2 border-primary" : "font-label-caps text-on-surface-variant hover:text-primary transition-colors"}`}
            >
              Outerwear
            </button>

            {/* Shirts */}

            <button
              type="button"
              onClick={handleCategoryChange}
              value="Shirts"
              className={`h-full flex items-center ${category === "Shirts" ? "font-label-caps text-primary border-b-2 border-primary" : "font-label-caps text-on-surface-variant hover:text-primary transition-colors"}`}
            >
              Shirts
            </button>

          </div>
        </div>
      </section>
    </>
  );
}

export default ProductsHeader;