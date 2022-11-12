import { Routes, Route } from 'react-router-dom'

import Homepage from './pages/Homepage';
import Products from './pages/Productspage';
import Detailspage from './pages/Detailspage';
import Notfoundpage from './pages/Notfoundpage';
import {Layout} from './components/layout'
import './App.css';

function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element = {<Homepage/>} />
          <Route path='products' element={<Products />} />
          <Route path='products/:id' element={<Detailspage />} />
          <Route path='*' element={<Notfoundpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;