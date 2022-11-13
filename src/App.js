import { Routes, Route } from 'react-router-dom'
import './App.css';

import Homepage from './pages/Homepage';
import Products from './pages/Productspage';
import Detailspage from './pages/Detailspage';
import Addpage from './pages/Addpage';
import Editpage from './pages/Editpage';
import Notfoundpage from './pages/Notfoundpage';
import Layout from './components/layout'
import Loginpage from './pages/Loginpage';
import RequireAuth from './hoc/RequireAuth';
import AuthProvider from './hoc/AuthProvider';


function App() {
 
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element = {<Homepage/>} />
          <Route path='products' element={<Products />} />
          <Route path='products/:id' element={<Detailspage />} />
          <Route path='products/:id/edit' element={<Editpage />} />
          <Route path='products/new' element={
            <RequireAuth>
              <Addpage />
            </RequireAuth>
          } />
          <Route path='login' element={<Loginpage />} />
          <Route path='*' element={<Notfoundpage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;