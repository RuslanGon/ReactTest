import { useEffect, useState } from "react"
import { reguestProducts, reguestProductsByQuery } from "../services/api"

export const useProductSearch = ({ isSearchPage = false}) => {

const [products, setProducts] = useState(null)
const [isLoader, setIsLoader] = useState(false)
const [isError, setIsError] =useState(false)
const [query, setQuery] = useState('')


useEffect(() => {
  async function fetchProducts() {
    if(isSearchPage) return
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
}, [isSearchPage]);

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
