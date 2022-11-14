import { useState, useEffect } from 'react'
import {Link, useSearchParams} from 'react-router-dom'
import ProductFilter from '../components/productSearch'



function Products() {
  const [data, setData] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()

  const prodQuery = searchParams.get('products') || ''
  const latest = searchParams.has('latest')

  const startsFrom = latest ? 80 : 1

useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setData(json))
}, [])
  
  return (
    <div className="card">
      <h2>Список товара</h2>
      <ProductFilter setSearchParams={setSearchParams} prodQuery={prodQuery} latest={latest}  />
      <div className='edit-link'>
        <Link to='/products/new'>Добавить продукт</Link>
      </div>
      
      {
        data.filter(
          data => data.title.includes(prodQuery) && data.id >=startsFrom
        ).map(data => (
          <Link key={data.id} to={`/products/${data.id}`}> 
            <li>{data.title }</li>
          </Link>
        ))
      }
    </div>
  )

}

export default Products