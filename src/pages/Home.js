import Menu from "../components/Menu";
import Banner from '../components/Banner';
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
        </>
    );
}

export default Home