import { Link } from "react-router-dom"


const ProductList = ({products}) => {
  return (
    <ul>
           {Array.isArray(products) && products.map(product => {
            return ( <li key={product.id}>
                <img width={350} src={product.thumbnail} alt="" />
                <h3>Title: {product.title}</h3>
                <p>Price: {product.price}</p>
                <p>Category: {product.category}</p>
                <p>Rating: {product.rating}</p>
                <Link to={`/products/${product.id}`}>See the details</Link>
            </li>)
           }

    )}
        </ul>
  )
}

export default ProductList