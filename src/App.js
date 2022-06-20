import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import LayoutDefault from './pages/LayoutDefault';
import 'bootstrap/dist/css/bootstrap.min.css';
import Produtos from './pages/Produtos';



function App() {
  return (
    <Routes>
      <Route path='/' element={<LayoutDefault />}>
      <Route path='/' index element={<Home />} />
      <Route path='/produtos'element={<Produtos />} />
      <Route path='/login'element={<Login />} />
      <Route path='/cadastro'element={<Cadastro />} />
      </Route>
    </Routes>

  )
}

export default App;
