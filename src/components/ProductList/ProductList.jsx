import { Link, useLocation } from "react-router-dom"

import css from '../../AppRouter.module.css'



const ProductList = ({products}) => {

  const location = useLocation()

  return (
    <ul className={css.divpro}>
      {location.pathname === '/search' && <h2>Search result</h2>}
      {location.pathname === '/products' && <h2>Products</h2>}
           {Array.isArray(products) && products.map(product => {
            return ( <li  key={product.id}>
                <img width={350} src={product.thumbnail} alt="" />
                <h3>Title: {product.title}</h3>
                <p>Price: {product.price}</p>
                <p>Category: {product.category}</p>
                <p>Rating: {product.rating}</p>
                <Link state={location} to={`/products/${product.id}`}>See the details</Link>
            </li>)
           }
    )}
        </ul>
  )
}

export default ProductList