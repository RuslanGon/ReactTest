
import { useEffect, useState } from "react"
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";
import { reguestProducts } from "./services/api";
import ProductList from "./components/ProductList/ProductList";
import SearchForm from "./components/SearchForm/SearchForm";


const AppHTTPSearch = () => {

const [products, setProducts] = useState(null)
const [isLoader, setIsLoader] = useState(false)
const [isError, setIsError] =useState(false)

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

  return (
    <div>
        <h1>Smart Ukraine Products</h1>
        <SearchForm />
        {isLoader && <Loader />}
        {isError && <Error />}
       <ProductList products={products}  />
      
    </div>
  )
}
export default AppHTTPSearch