
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";
import ProductList from "../components/ProductList/ProductList";
import { useProductSearch } from "../hooks/useProductSearch";



const ProductsPage = () => {

  const {products, isLoader, isError} = useProductSearch({isSearchPage: false})

  return (
    <div>
        <h1>Smart Ukraine Products</h1>
        {isLoader && <Loader />}
        {isError && <Error />}
       <ProductList products={products}  />
      
    </div>
  )
}
export default ProductsPage