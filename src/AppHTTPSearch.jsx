
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
        const response = await axios.get('https://dummyjson.com/products');
    
      }
      fetchProducts();
}, [])

  return (
    <div>
        <h1>Smart Ukraine cars</h1>
        <ul>
            <li>
                <img width={250} src="https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/thumbnail.png" alt="" />
                <h3>Title:</h3>
                <p>Price:</p>
                <p>Brand:</p>
                <p>Total:</p>
            </li>
        </ul>
    </div>
  )
}

export default AppHTTPSearch