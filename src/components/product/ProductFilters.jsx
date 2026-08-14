import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSortBy,
  toggleBrands,
  toggleColors,
  toggleMaterials,
  toggleSize,
  clearFilters,
} from "../../features/filters/filtersSlice";
import { addToCart } from "../../features/cart/cartSlice";

function ProductFilters({ products }) {
  const {
    sortBy,
    selectedMaterials = [],
    selectedColors = [],
    selectedSizes = [],
    selectedBrands = [],
  } = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const filteredProducts = products
    .filter((item) => {
      const materialMatch =
        selectedMaterials.length === 0 ||
        selectedMaterials.includes(item.attributes?.material);

      const colorMatch =
        selectedColors.length === 0 ||
        selectedColors.some((color) =>
          item.availableColors?.includes(color)
        );

      const sizeMatch =
        selectedSizes.length === 0 ||
        selectedSizes.some((size) =>
          item.availableSizes?.includes(size)
        );

      const brandMatch =
        selectedBrands.length === 0 ||
        selectedBrands.includes(item.brand);

      return (
        materialMatch &&
        colorMatch &&
        sizeMatch &&
        brandMatch
      );
    })
    .sort((a, b) => {
      if (sortBy === "priceLow") {
        return a.price - b.price;
      }

      if (sortBy === "priceHigh") {
        return b.price - a.price;
      }

      if (sortBy === "popular") {
        return b.rating - a.rating;
      }

      if (sortBy === "newest") {
        return b.id - a.id;
      }

      return 0;
    });

  console.log("FILTERED PRODUCTS:", filteredProducts);

  console.log("ACTIVE FILTERS:", {
    material: selectedMaterials,
    color: selectedColors,
    size: selectedSizes,
    brand: selectedBrands,
  });

  return (
    <div>
      <main className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop pt-4 pb-section-gap">

        {/* Category Header */}

        <header className="mb-16 mt-0.5">
          <h1 className="font-headline-lg text-headline-lg mb-4">
            Summer Curations
          </h1>

          <p className="max-w-xl text-on-surface-variant font-body-lg text-body-lg">
            Explore our curated selection of heritage pieces and modern
            staples, crafted from the world's finest cashmere, silks, and
            leathers.
          </p>
        </header>

        <div className="flex flex-col md:flex-row gap-gutter">

          {/* Filter Sidebar */}

          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="sticky top-28 space-y-10 custom-scrollbar max-h-[calc(100vh-140px)] overflow-y-auto pr-4">

              {/* Sorting */}

              <div className="pb-6 border-b border-outline-variant">

                <label className="font-label-caps text-label-caps text-on-surface-variant block mb-3">
                  Sort By
                </label>

                <select
                  value={sortBy}
                  onChange={(e) =>
                    dispatch(setSortBy(e.target.value))
                  }
                  className="w-full bg-transparent border-none p-0 font-body-md text-body-md focus:ring-0 cursor-pointer"
                >
                  <option value="newest">
                    Newest First
                  </option>

                  <option value="priceLow">
                    Price: Low to High
                  </option>

                  <option value="priceHigh">
                    Price: High to Low
                  </option>

                  <option value="popular">
                    Most Popular
                  </option>
                </select>
              </div>

              {/* Material */}

              <section>
                <h3 className="font-label-caps text-label-caps font-bold mb-4 tracking-widest">
                  Material
                </h3>

                <div className="space-y-3">

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      onChange={() =>
                        dispatch(toggleMaterials("Silk"))
                      }
                      checked={selectedMaterials.includes("Silk")}
                      className="w-4 h-4 border-outline rounded-none focus:ring-0 checked:bg-primary"
                    />

                    <span className="font-body-md text-body-md group-hover:text-primary transition-colors">
                      Silk
                    </span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      onChange={() =>
                        dispatch(toggleMaterials("Cashmere"))
                      }
                      checked={selectedMaterials.includes("Cashmere")}
                      className="w-4 h-4 border-outline rounded-none focus:ring-0 checked:bg-primary"
                    />

                    <span className="font-body-md text-body-md group-hover:text-primary transition-colors">
                      Cashmere
                    </span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      onChange={() =>
                        dispatch(toggleMaterials("Leather"))
                      }
                      checked={selectedMaterials.includes("Leather")}
                      className="w-4 h-4 border-outline rounded-none focus:ring-0 checked:bg-primary"
                    />

                    <span className="font-body-md text-body-md group-hover:text-primary transition-colors">
                      Leather
                    </span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      onChange={() =>
                        dispatch(toggleMaterials("Linen"))
                      }
                      checked={selectedMaterials.includes("Linen")}
                      className="w-4 h-4 border-outline rounded-none focus:ring-0 checked:bg-primary"
                    />

                    <span className="font-body-md text-body-md group-hover:text-primary transition-colors">
                      Linen
                    </span>
                  </label>

                </div>
              </section>

              {/* Size */}

              <section>
                <h3 className="font-label-caps text-label-caps font-bold mb-4 tracking-widest">
                  Size
                </h3>

                <div className="grid grid-cols-4 gap-2">

                  <button
                    type="button"
                    onClick={() => dispatch(toggleSize("XS"))}
                    className={`aspect-square border flex items-center justify-center font-label-caps text-label-caps transition-colors ${
                      selectedSizes.includes("XS")
                        ? "border-primary bg-primary text-on-primary"
                        : "border-outline-variant hover:border-primary"
                    }`}
                  >
                    XS
                  </button>

                  <button
                    type="button"
                    onClick={() => dispatch(toggleSize("S"))}
                    className={`aspect-square border flex items-center justify-center font-label-caps text-label-caps transition-colors ${
                      selectedSizes.includes("S")
                        ? "border-primary bg-primary text-on-primary"
                        : "border-outline-variant hover:border-primary"
                    }`}
                  >
                    S
                  </button>

                  <button
                    type="button"
                    onClick={() => dispatch(toggleSize("M"))}
                    className={`aspect-square border flex items-center justify-center font-label-caps text-label-caps transition-colors ${
                      selectedSizes.includes("M")
                        ? "border-primary bg-primary text-on-primary"
                        : "border-outline-variant hover:border-primary"
                    }`}
                  >
                    M
                  </button>

                  <button
                    type="button"
                    onClick={() => dispatch(toggleSize("L"))}
                    className={`aspect-square border flex items-center justify-center font-label-caps text-label-caps transition-colors ${
                      selectedSizes.includes("L")
                        ? "border-primary bg-primary text-on-primary"
                        : "border-outline-variant hover:border-primary"
                    }`}
                  >
                    L
                  </button>

                  <button
                    type="button"
                    onClick={() => dispatch(toggleSize("XL"))}
                    className={`aspect-square border flex items-center justify-center font-label-caps text-label-caps transition-colors ${
                      selectedSizes.includes("XL")
                        ? "border-primary bg-primary text-on-primary"
                        : "border-outline-variant hover:border-primary"
                    }`}
                  >
                    XL
                  </button>

                </div>
              </section>

              {/* Color */}

              <section>
                <h3 className="font-label-caps text-label-caps font-bold mb-4 tracking-widest">
                  Color
                </h3>

                <div className="flex flex-wrap gap-3">

                  <button
                    type="button"
                    onClick={() => dispatch(toggleColors("Black"))}
                    className={`w-6 h-6 bg-[#000000] border border-outline-variant ring-offset-2 transition-all ${
                      selectedColors.includes("Black")
                        ? "ring-2 ring-primary"
                        : "hover:ring-1 ring-primary"
                    }`}
                    aria-label="Black"
                  />

                  <button
                    type="button"
                    onClick={() => dispatch(toggleColors("Ivory"))}
                    className={`w-6 h-6 bg-[#f5f5dc] border border-outline-variant ring-offset-2 transition-all ${
                      selectedColors.includes("Ivory")
                        ? "ring-2 ring-primary"
                        : "hover:ring-1 ring-primary"
                    }`}
                    aria-label="Ivory"
                  />

                  <button
                    type="button"
                    onClick={() => dispatch(toggleColors("Emerald"))}
                    className={`w-6 h-6 bg-[#2f4f4f] border border-outline-variant ring-offset-2 transition-all ${
                      selectedColors.includes("Emerald")
                        ? "ring-2 ring-primary"
                        : "hover:ring-1 ring-primary"
                    }`}
                    aria-label="Emerald"
                  />

                  <button
                    type="button"
                    onClick={() => dispatch(toggleColors("Cocoa"))}
                    className={`w-6 h-6 bg-[#8b4513] border border-outline-variant ring-offset-2 transition-all ${
                      selectedColors.includes("Cocoa")
                        ? "ring-2 ring-primary"
                        : "hover:ring-1 ring-primary"
                    }`}
                    aria-label="Cocoa"
                  />

                  <button
                    type="button"
                    onClick={() => dispatch(toggleColors("White"))}
                    className={`w-6 h-6 bg-[#ffffff] border border-outline-variant ring-offset-2 transition-all ${
                      selectedColors.includes("White")
                        ? "ring-2 ring-primary"
                        : "hover:ring-1 ring-primary"
                    }`}
                    aria-label="White"
                  />

                </div>
              </section>

              {/* Brand */}

              <section>
                <h3 className="font-label-caps text-label-caps font-bold mb-4 tracking-widest">
                  Brand
                </h3>

                <div className="space-y-3">

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      onChange={() =>
                        dispatch(toggleBrands("Valour Atelier"))
                      }
                      checked={selectedBrands.includes("Valour Atelier")}
                      className="w-4 h-4 border-outline rounded-none focus:ring-0 checked:bg-primary"
                    />

                    <span className="font-body-md text-body-md group-hover:text-primary transition-colors">
                      Valour Atelier
                    </span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      onChange={() =>
                        dispatch(toggleBrands("Maison Noir"))
                      }
                      checked={selectedBrands.includes("Maison Noir")}
                      className="w-4 h-4 border-outline rounded-none focus:ring-0 checked:bg-primary"
                    />

                    <span className="font-body-md text-body-md group-hover:text-primary transition-colors">
                      Maison Noir
                    </span>
                  </label>

                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      onChange={() =>
                        dispatch(toggleBrands("Vogue Valour"))
                      }
                      checked={selectedBrands.includes("Vogue Valour")}
                      className="w-4 h-4 border-outline rounded-none focus:ring-0 checked:bg-primary"
                    />

                    <span className="font-body-md text-body-md group-hover:text-primary transition-colors">
                      Vogue Valour
                    </span>
                  </label>

                </div>
              </section>

              {/* Clear Filters */}

              <button
                type="button"
                onClick={() => dispatch(clearFilters())}
                className="w-full py-3 border border-primary font-label-caps text-label-caps hover:bg-primary hover:text-on-primary transition-all duration-300"
              >
                Clear All Filters
              </button>

            </div>
          </aside>

          {/* Product Grid */}

          <div className="flex-grow">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">

           {filteredProducts.map((item) => (
  <article
    key={item.id}
    className="group product-card"
  >
    <div className="relative aspect-[3/4] overflow-hidden mb-4">

      {item.isNew && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-tertiary text-on-tertiary px-2 py-1 font-label-caps text-[10px] tracking-widest">
            NEW IN
          </span>
        </div>
      )}

      <img
        src={item.images?.main}
        alt={item.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />

      {/* Add To Bag */}

      <div className="absolute inset-x-4 bottom-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        <button
          type="button"
          disabled={item.totalStock <= 0}
          onClick={() => dispatch(addToCart(item))}
          className="w-full bg-surface text-primary py-4 font-label-caps text-label-caps hover:bg-primary hover:text-on-primary transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="material-symbols-outlined text-lg">
            shopping_bag
          </span>

          {item.totalStock > 0 ? "ADD TO BAG" : "OUT OF STOCK"}
        </button>
      </div>

    </div>

    <div className="flex justify-between items-start">

      <div>

        <p className="font-label-caps text-label-sm text-on-surface-variant mb-1">
          {item.category}
        </p>

        <h3 className="font-body-md text-body-md font-medium">
          {item.name}
        </h3>

      </div>

      <p className="font-body-md text-body-md">
        ${item.price}
      </p>

    </div>

  </article>
))}
            </div>

            {/* Load More */}

            <div className="mt-24 text-center">

              <button
                type="button"
                className="px-12 py-5 border border-primary font-label-caps text-label-caps hover:bg-primary hover:text-on-primary transition-all duration-500 tracking-widest"
              >
                LOAD MORE PIECES
              </button>

            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductFilters;