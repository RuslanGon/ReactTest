
// {
//     "id": 168,
//     "title": "Charger SXT RWD",
//     "price": 32999.99,
//     "quantity": 3,
//     "total": 98999.97,
//     "discountPercentage": 13.39,
//     "discountedTotal": 85743.87,
//     "thumbnail": "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png"
//   }

import axios from "axios";
import { useEffect, useState } from "react"


const AppHTTPSearch = () => {

const [products, setProducts] = useState(null)

useEffect(() => {
    async function fetchProducts() {
        const {data} = await axios.get('https://dummyjson.com/products');
    console.log(data);
    setProducts(data.products)
      }
      fetchProducts();
}, [])

  return (
    <div>
        <h1>Smart Ukraine cars</h1>
        <ul>
           {Array.isArray(products) && products.map(product => {
            return ( <li key={product.id}>
                <img width={350} src={product.thumbnail} alt="" />
                <h3>Title: {product.title}</h3>
                <p>Price: {product.price}</p>
                <p>Brand: {product.branb}</p>
                <p>Total: {product.total}</p>
            </li>)
           }

    )}
        </ul>
    </div>
  )
}

export default AppHTTPSearch