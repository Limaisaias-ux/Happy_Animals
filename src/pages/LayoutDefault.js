import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const LayoutDefault = () => {
  return (
    <>
      <Outlet />
      <Footer />  
    </>
  )
}

export default LayoutDefault