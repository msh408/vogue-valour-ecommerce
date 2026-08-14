import { useMemo } from "react";

function useSortedProducts (products,sortBy){
    return (
         useMemo(()=>{
            const result = [...products];
             switch(sortBy){
                case "price-low":
                    return result.sort((a,b)=>Number(a.price)-Number(b.price));
                case "price-high":
                    return result.sort((a,b)=>Number(b.price) - Number(a.price));
                case "newest":
                    return result.sort((a,b)=>Number(b.id)- Number(a.id));
                case "recommended":
                    default :
                return result

             }

        },[products,sortBy])
    )
}
export default useSortedProducts;