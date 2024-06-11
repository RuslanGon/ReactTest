import { useEffect, useState } from "react"
import { reguestProductsByQuery } from "../services/api"
import { useSearchParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { apiGetProducts } from "../redux/productDetails/operation"

export const useProductSearch = ({ isSearchPage = false}) => {

  const dispatch = useDispatch()
  const products = useSelector(state => state.productDetails.products)
 

// const [products, setProducts] = useState(null)
const [isLoader, setIsLoader] = useState(false)
const [isError, setIsError] =useState(false)
// const [query, setQuery] = useState('')

const [searchParams, setSearchParams] = useSearchParams()
const query = searchParams.get('query')


useEffect(() => {
  dispatch(apiGetProducts())
}, [dispatch]);

useEffect(() => {
// if(query === null)return
if(!query) return
async function fetchProductsByQuery() {
  try {
    setIsLoader(true);
    const data = await reguestProductsByQuery(query);
    // setProducts(data.products);
  } catch (error) {
    setIsError(true);
  } finally {
    setIsLoader(false);
  }
}
fetchProductsByQuery();

}, [query])

const onSetSearchQuery = (searchTerm) => {
  // setQuery(searchTerm)
  setSearchParams({query: searchTerm})
}

  return {products, isLoader, isError, onSetSearchQuery}
}
