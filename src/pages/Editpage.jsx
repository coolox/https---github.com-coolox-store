import { useParams, useNavigate } from 'react-router-dom'

function EditProduct() {
  const { id } = useParams()
  const navigate = useNavigate()
  const goBack =() => navigate(-1)

return(
  <div>
    <h2>Изменить тавар {id}</h2>
    
    <div className='Button'>
      <button onClick={goBack}>Назад</button>
    </div>
  </div>
  
)
}

export default EditProduct