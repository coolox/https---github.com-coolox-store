import { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'


function Products() {
  const [data, setData] = useState([])
  
useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json => setData(json))
}, [])
  
  return (
    <div className="card">
      <h2>Список товара</h2>
      {
        data.map(data => (
          <Link key={data.id} to={`/products/${data.id}`}> 
            <li>{data.title }</li>
          </Link>
        ))
      }
    </div>
  )

}

export default Products