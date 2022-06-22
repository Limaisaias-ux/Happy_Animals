import Menu from "../components/Menu";
import './Produtos.css';
import Card from 'react-bootstrap/Card';
import { Button, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";

const Produtos = () => {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch("http://localhost/lp2/api/product/select-all")
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <>
        <Menu />
        <h1 className="tname">Produtos</h1>
        <Row>
            {products &&
                products.map((product) => {
                    return (
                        <Col xs={4} className='mb-4'>
                            <Card style={{ width: '100%', height: '100%' }} key={product.id} className="pcorp">
                                <Card.Img variant="top" src={product.photo} className="proimg" width="30px" height="350px" />
                                <Card.Body>
                                    <Card.Title className="ptitulo">{product.title}</Card.Title>
                                    <Card.Text className="ptext">{product.description}</Card.Text>
                                    <Card.Text className="ptext">R${product.price},00</Card.Text>
                                    <div className="butbuy">
                                        <Button variant="primary">Comprar</Button>
                                    </div>
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


export default Produtos