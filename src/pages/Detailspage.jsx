import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'



function Details() {
  
  const { id } = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  const goBack =() => navigate(-1)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then(json => setData(json))
  },[id])

  return (
    <div className="card">
      {data && (
        <>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
          <div className='edit-link'>
            <Link to={`/products/${id}/edit`} >Изменит продукт</Link>
          </div>
        </>
      )}
      <div className='Button'>
        <button onClick={goBack}>Назад</button>
      </div>
      
    </div>
  )

}

export default Details