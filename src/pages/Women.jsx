import React from 'react'
function Women ({products}){

    const productWomen = products.filter (item => item.gender === 'Women')

    return(
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 p-2 ">
  {productWomen.map((item) => (
    <article
      key={item.id}
      className="group cursor-pointer"
    >
      {/* Image */}
        <div className="relative aspect-[4/5] w-full max-w-[320px] mx-auto overflow-hidden bg-neutral-100 mb-5">
        <img
          src={item.images.main}
          alt={item.images.alt || item.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* New badge */}
        {item.isNew && (
          <span className="absolute top-4 left-4 bg-white px-3 py-1.5 text-[10px] tracking-[0.2em] font-medium">
            NEW IN
          </span>
        )}

        {/* Sale badge */}
        {item.isSale && (
          <span className="absolute top-4 right-4 bg-primary text-white px-3 py-1.5 text-[10px] tracking-[0.2em] font-medium">
            SALE
          </span>
        )}

        {/* Quick Add */}
        <div className="absolute bottom-4 left-4 right-4 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            className="w-full bg-white/95 backdrop-blur-sm py-4 text-[11px] tracking-[0.2em] font-medium hover:bg-primary hover:text-white transition-colors duration-300"
          >
            ADD TO BAG
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="flex justify-around items-start gap-4">
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 mb-2">
            {item.brand}
          </p>

          <h2 className="text-sm md:text-base font-medium text-neutral-900">
            {item.name}
          </h2>

          <p className="text-xs text-neutral-500 mt-2">
            {item.category}
          </p>
        </div>

        <p className="text-sm font-medium text-neutral-900 whitespace-nowrap">
          ${item.price}
        </p>
      </div>
    </article>
  ))}
</div>
    )
}
export default Women;