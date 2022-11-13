import { useNavigate } from 'react-router-dom'
import {useAuth} from '../hooc/useAuth'

function AddProduct() {
  const { signout } = useAuth()
  const navigate = useNavigate()
  
  return (
    <div>
      <h1>Добавить тoвар</h1>
    <button onClick={()=>signout(()=>navigate('/', {replace: true}))}>Sign Out</button>
    </div>
  )
}

export default AddProduct