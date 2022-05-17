import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services'
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import LayoutDefault from './pages/LayoutDefault';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Routes>
      <Route path='/' element={<LayoutDefault />}>
      <Route index element={<Home />} />
      <Route path='/services'element={<Services />} />
      <Route path='/login'element={<Login />} />
      <Route path='/cadastro'element={<Cadastro />} />
      </Route>
    </Routes>

  )
}

export default App;
