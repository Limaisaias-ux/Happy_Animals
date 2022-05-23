import Menu from "../components/Menu";
import Banner from '../components/Banner';
import Sobre from '../components/Sobre';
import './Home.css';

function Home() {
    return (
        <>
        <Menu />        
        <div className="conteudo">
        <br/>
        <Banner />
        <br/>
        </div>
        <div className="sobre">
            <Sobre />
        </div>
        </>
    );
}

export default Home