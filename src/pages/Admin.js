import Menu from "../components/Menu";
import './Admin.css';
import Card from 'react-bootstrap/Card';
import { Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import CadastroProducts from "../components/CadastroProducts";

const Admin = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch("http://localhost/lp2/api/product/select-all")
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <>
        <Menu />
        <h1 className="adname">Produtos</h1>
        <Row>
            {products &&
                products.map((product) => {
                    return (
                        <Col xs={4} className='mb-4'>
                            <Card style={{ width: '100%', height: '100%' }} key={product.id} className="admcorp">
                                <Card.Img variant="top" src={product.photo} className="proadm" width="30px" height="350px" />
                                <Card.Body>
                                    <Card.Title className="adtitulo">{product.title}</Card.Title>
                                    <Card.Text className="adtext">{product.description}</Card.Text>
                                    <Card.Text className="adtext">R${product.price},00</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
            }
            </Row>
        </>
    )
}


export default Admin