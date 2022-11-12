import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'



function Details() {
  
  const { id } = useParams()
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(response => response.json())
      .then(json => setData(json))
  },[id])

  return (
    <div className="card">
      {data && (
        <>
          <h2>{data.title}</h2>
          <h3>{ id }</h3>
          <img src={data.thumbnailUrl} alt="" />
        </>
      )}
    </div>
  )

}

export default Details