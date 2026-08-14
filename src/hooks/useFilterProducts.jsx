import React ,{useMemo} from 'react'


function useFilterProducts(products,category) {
  return (
    useMemo(()=>{
       if (category === "all-collection"){
        return products ;
       }

       return products.filter(product => product.category === category);
    },[products,category])
  )
}

export default useFilterProducts
