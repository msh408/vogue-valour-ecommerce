import React from 'react'
import ProductList from '../components/product/ProductList';

function ProductsPage({products}) {


console.log(products);
  return (
    <div>
        <ProductList products={products}/>
    </div>
  )
}

export default ProductsPage






