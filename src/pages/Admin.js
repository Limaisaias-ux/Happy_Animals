import Menu from "../components/Menu";
import './Admin.css';
import Card from 'react-bootstrap/Card';
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';
import { BiEdit } from 'react-icons/bi';
import { MdCreateNewFolder } from 'react-icons/md';
import { useAuth } from '../providers/authProvider';


const Admin = () => {

    const [products, setProducts] = useState(null);
    const { userLogged } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost/lp2/api/product/selectAll")
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    const handleTrashClick = (productId) => {
        const formData = new FormData()
        formData.append('id', productId)
        const productDelete = "http://localhost/lp2/api/product/delete"
          fetch(productDelete,{
            method: 'POST',
            //mode: 'no-cors',
            body: formData,
             headers: {
                "Access-Token": userLogged.token
            }})
          .then((response) => response.json())
          .then((data) => {
            alert(data.message)
            window.location.reload(false)
          })
    }

        const reloadPage = () => {
            window.location.reload(false)
        }
    return (
        <>
        <Menu />
        <h1 className="adname">Produtos</h1>
        <Link to="/cadastroproduct" className="cadicon"><MdCreateNewFolder /></Link>
        
        <Row>
            {products &&
                products.map((product) => {
                    return (
                        <>
                        
                        <Col xs={4} className='mb-4'>
                            <Card style={{ width: '100%', height: '100%' }} key={product.id} className="admcorp">
                                <Card.Img variant="top" src={product.photo} className="proadm" width="30px" height="350px" />
                                <Card.Body>
                                    <Card.Title className="adtitulo">{product.title}</Card.Title>
                                    <Card.Text className="adtext">{product.description}</Card.Text>
                                    <Card.Text className="adtext">R${product.price},00</Card.Text>
                                    <div className="editp">
                                    <BiEdit onClick={()=> navigate('/editproduct/'+product.id)} style={{cursor: 'pointer'}}/>
                                    <MdDelete style={{cursor: 'pointer'}} onClick={() =>{handleTrashClick(product.id); 
                                    }
                                    } />
                                    </div>
                                   
                                </Card.Body>
                            </Card>
                        </Col>
                        </>
                    )
                })
            }
            </Row>
        </>
    )
}


export default Admin