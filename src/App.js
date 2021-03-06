import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import LayoutDefault from './pages/LayoutDefault';
import 'bootstrap/dist/css/bootstrap.min.css';
import Produtos from './pages/Produtos';
import AuthProvider from './providers/authProvider';
import Admin from './pages/Admin';
import CadastroProducts from './components/CadastroProducts';
import EditProduct from './components/EditProduct';


function App() {
  return (
    <AuthProvider>
    <Routes>
      <Route path='/' element={<LayoutDefault />}>
        <Route path='/' index element={<Home />} />
        <Route path='/produtos'element={<Produtos />}/>
        <Route path='/login'element={<Login />} />
        <Route path='/cadastro'element={<Cadastro />}/>

        {/* PARTE ADM */}
        <Route path='/admin' element={<Admin />} />
        <Route path='/cadastroproduct' element={<CadastroProducts />} />
        <Route path='/editproduct/:editproductId' element={<EditProduct />} />
      </Route>
    </Routes>
    </AuthProvider>
  )
}

export default App;
