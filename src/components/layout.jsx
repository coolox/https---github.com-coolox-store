import { NavLink, Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='page'>
      <header className='header'>
        <NavLink to="/" className='head-links' >Home</NavLink>
        <NavLink to="/products" className='head-links' >Products</NavLink>
      </header>

      <Outlet />

      <footer className='footer'>here we are. 2022</footer>
    </div>
  )
}

export default Layout