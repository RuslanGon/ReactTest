
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";
import ProductList from "../components/ProductList/ProductList";
import { useProductSearch } from "../hooks/useProductSearch";
import css from '../AppRouter.module.css'

 

const ProductsPage = () => {

  const {products, isLoader, isError} = useProductSearch({isSearchPage: false})

  return (
    <div className={css.divprod}>
        <h1>Smart Ukraine Products</h1>
        {isLoader && <Loader />}
        {isError && <Error />}
       <ProductList products={products}  />
      
    </div>
  )
}
export default ProductsPage