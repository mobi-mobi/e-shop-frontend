import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import ProductPage from '../pages/ProductPage';
import CartPage from '../pages/CartPage';
import { CartProvider } from '../contexts/CartContext';
import SuccessPage from '../pages/SuccessPage';
import CancelPage from '../pages/CancelPage';
import AdminPage from '../pages/AdminPage';

const AppRoutes = () =>{

    return(
      <CartProvider>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/products' element={<ProductsPage/>} />
            <Route path='/product/:slug' element={<ProductPage/>}/>
            <Route path='/cart' element={<CartPage/>} />
            <Route path='/success' element={<SuccessPage/>} />
            <Route path='/cancel' element={<CancelPage/>} />
            <Route path='/admin' element={<AdminPage/>} />
          </Routes>
        </Router>
      </CartProvider>
    )
}

export default AppRoutes;