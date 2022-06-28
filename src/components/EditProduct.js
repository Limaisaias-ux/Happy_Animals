import { useEffect, useState } from 'react';
import { Form, Row, Col, Button } from "react-bootstrap";
import './EditProduct.css';
import { useAuth } from '../providers/authProvider';
import { useParams, useNavigate } from 'react-router-dom'

const EditProduct = () => {

    const { editproductId } = useParams();
    const [product, setProduct] = useState();
    const { userLogged } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        fetch("http://localhost/lp2/api/product/selectById?id="+editproductId)
            .then((response) => response.json())
            .then((data) => setProduct(data));
    }, [editproductId]);
  
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData()
        formData.append('id', editproductId)
        formData.append('photo', event.target[0].value)
        formData.append('title', event.target[1].value)
        formData.append('description', event.target[2].value)
        formData.append('price', event.target[3].value)
        fetch(
            "http://localhost/lp2/api/product/update",
            {method: 'POST', body: formData, headers: {
              "Access-Token": userLogged.token
            }}
            )
            .then((response) => response.json())
            .then((data) => {
                if(data?.product?.id){
                    navigate('/admin');
                } else if(data?.message){
                    alert(data.message)
                    navigate('/admin')
                } else {
                    console.log(data)
                }
            })
    } 

    const handleChange = (event) => {
      const {name, value} = event.target
      setProduct({...product, [name]: value})
    }
  
    return (
        <>
          <div className='catras'>
              {product ? (
                <div className='cafrente'>
                  <h1 className='caname'>Editar Produto</h1>
                  <Form onSubmit={(event) => handleSubmit(event)}>
                  <Row className="mb-3">
                    <Form.Group className='focagroup' as={Col} md="8">
                      <Form.Label>Foto</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Foto"
                        name="photo"
                        defaultValue={product.photo}
                        onChange={handleChange}
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
                        onChange={handleChange}
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
                        defaultValue={product.description}
                        onChange={handleChange}
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
                        onChange={handleChange}
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