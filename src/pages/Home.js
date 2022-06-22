import Menu from "../components/Menu";
import Banner from '../components/Banner';
import Sobre from '../components/Sobre';
import Services from '../components/Services';
import './Home.css';

function Home() {
    return (
        <>
        <div className="menu">
        <Menu />
        </div>        
        <div className="banner">
        <Banner />
        </div>
        <div className="sobre">
            <Sobre />
        </div>
        <div className="services">
            <Services />
        </div>
        </>
    );
}

export default Home