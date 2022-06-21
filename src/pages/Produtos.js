import Menu from "../components/Menu";
import './Produtos.css';
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
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
            {products &&
                products.map((product) => {
                    return (
                        <>
                            <Card style={{ width: '18rem' }} key={product.id}>
                                <Card.Img variant="top" src={product.photo} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>{product.description}</Card.Text>
                                    <Card.Text>R${product.price},00</Card.Text>
                                    <Button variant="primary">Comprar</Button>
                                </Card.Body>
                            </Card>
                        </>
                    )
                })
            }
        </>
    )
}


export default Produtos