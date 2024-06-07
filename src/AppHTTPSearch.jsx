
import { useEffect, useState } from "react"
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";
import { reguestProducts, reguestProductsByQuery } from "./services/api";
import ProductList from "./components/ProductList/ProductList";
import SearchForm from "./components/SearchForm/SearchForm";


const AppHTTPSearch = () => {

const [products, setProducts] = useState(null)
const [isLoader, setIsLoader] = useState(false)
const [isError, setIsError] =useState(false)
const [query, setQuery] = useState('')


useEffect(() => {
  async function fetchProducts() {
    try {
      setIsLoader(true);
      const data = await reguestProducts();
      console.log(data);
      setProducts(data.products);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoader(false);
    }
  }
  fetchProducts();
}, []);

useEffect(() => {
if(query.length === 0)return
async function fetchProductsByQuery() {
  try {
    setIsLoader(true);
    const data = await reguestProductsByQuery(query);
    console.log(data);
    setProducts(data.products);
  } catch (error) {
    setIsError(true);
  } finally {
    setIsLoader(false);
  }
}
fetchProductsByQuery();

}, [query])

const onSetSearchQuery = (searchTerm) => {
  setQuery(searchTerm)
}

  return (
    <div>
        <h1>Smart Ukraine Products</h1>
        <SearchForm onSetSearchQuery={onSetSearchQuery} />
        {isLoader && <Loader />}
        {isError && <Error />}
       <ProductList products={products}  />
      
    </div>
  )
}
export default AppHTTPSearch