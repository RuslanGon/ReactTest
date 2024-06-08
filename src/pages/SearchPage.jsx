
// import { useEffect, useState } from "react"
import Loader from "../components/Loader/Loader";
import Error from "../components/Error/Error";
// import { reguestProducts, reguestProductsByQuery } from "./services/api";
import ProductList from "../components/ProductList/ProductList";
import SearchForm from "../components/SearchForm/SearchForm";
import { useProductSearch } from "../hooks/useProductSearch";


const SearchPage = () => {

  const {products, isLoader, isError, onSetSearchQuery} = useProductSearch()

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