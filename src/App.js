import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import LayoutDefault from './pages/LayoutDefault';
import 'bootstrap/dist/css/bootstrap.min.css';
import Produtos from './pages/Produtos';
import AuthProvider from './providers/authProvider';



function App() {
  return (
    <AuthProvider>
    <Routes>
      <Route path='/' element={<LayoutDefault />}>
      <Route path='/' index element={<Home />} />
      <Route path='/produtos'element={<Produtos />}/>
      <Route path='/login'element={<Login />} />
      <Route path='/cadastro'element={<Cadastro />}/>
      </Route>
    </Routes>
    </AuthProvider>
  )
}

export default App;
