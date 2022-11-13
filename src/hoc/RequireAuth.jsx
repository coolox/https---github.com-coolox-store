import { useLocation, Navigate } from 'react-router-dom'
import {useAuth} from '../hooc/useAuth'

function RequireAuth({children}) {
  const location = useLocation()
  const {user} = useAuth()
  console.log(location)
  if (!user) {
    return <Navigate to='/login' state={{ from: location }} />
    
  }
  return children
}

export default RequireAuth