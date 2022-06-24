import { useEffect, useState } from 'react';
import { Form, Row, Col, Button } from "react-bootstrap";
import './EditProduct.css';
import { useParams, useNavigate } from 'react-router-dom'

const EditProduct = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost/lp2/api/product/selectById"+productId)
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }, [productId]);
  
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('id', productId)
        formData.append('photo', event.target[0].value)
        formData.append('title', event.target[1].value)
        formData.append('description', event.target[2].value)
        formData.append('price', event.target[3].value)
        fetch(
            "http://localhost/lp2/api/product/update",
            {method: 'POST', body: formData}
            )
            .then((response) => response.json())
            .then((data) => {
                if(data?.product?.id){
                    navigate('../');
                } else if(data?.message){
                    alert(data.message)
                } else {
                    console.log(data)
                }
            })
    } 
  
    return (
        <>
          <div className='catras'>
              {product ? (
                <div className='cafrente'>
                  <h1 className='caname'>Editar Produto</h1>
                  <Form noValidate onSubmit={(event) => handleSubmit(event)}>
                  <Row className="mb-3">
                    <Form.Group className='focagroup' as={Col} md="8">
                      <Form.Label>Foto</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Foto"
                        name="photo"
                        defaultValue={product.photo}
                      />

                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group className='focagroup' as={Col} md="6">
                      <Form.Label>Título</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder='Título'
                        name='title'
                        defaultValue={product.title}
                      />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group className='focagroup' as={Col} md="6">
                      <Form.Label>Descrição</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder='Descrição do Produto'
                        name='description'
                        defaultValue={product.descripton}
                      />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group className='focagroup' as={Col} md="6">
                      <Form.Label>Preço</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder='Preço'
                        name='price'
                        defaultValue={product.price}
                      />
                    </Form.Group>
                  </Row>
                  <Button className='blogar' type="submit">Editar</Button>
                  </Form>
                </div>
                )
              : 
                  (<p>Produto não encontrado!</p>)
              }

          </div>
        </>
    )
}

export default EditProduct