import { useEffect, useState } from "react"
import { reguestProducts, reguestProductsByQuery } from "../services/api"

export const useProductSearch = () => {

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

  return {products, isLoader, isError, onSetSearchQuery}
}
