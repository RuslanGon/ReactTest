
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";
import ProductList from "../components/ProductList/ProductList";
import SearchForm from "../components/SearchForm/SearchForm";
import { useProductSearch } from "../hooks/useProductSearch";

const SearchPage = () => {

  const {products, isLoader, isError, onSetSearchQuery} = useProductSearch({isSearchPage: true})

  return (
    <div>
        <h1>Search product</h1>
        <SearchForm onSetSearchQuery={onSetSearchQuery} />
        {isLoader && <Loader />}
        {isError && <Error />}
       <ProductList products={products}  />
      
    </div>
  )
}
export default SearchPage