import React from 'react'
import ProductFilters from '../components/product/ProductFilters'

function Category_Filter({products}) {
  return (
    <div>
       <ProductFilters products={products} />
    </div>
  )
}

export default Category_Filter
