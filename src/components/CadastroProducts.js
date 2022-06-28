import React from 'react';
import { Formik } from 'formik'; //npm install formik --save
import { Form, Row, Col, Button } from "react-bootstrap";
import './CadastroProducts.css';
import Menu from "../components/Menu"
import { useRef, useEffect } from 'react';
import { useAuth } from '../providers/authProvider';
import { useNavigate } from "react-router-dom"


const CadastroProducts = () => {

    const photoRef = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();
    const navigate = useNavigate()
    const { userLogged } = useAuth();
  
    useEffect(() => {
      titleRef.current.focus()
    }, [])
  
      return (
        <>
          <Menu />
          <div className='atras'>
            <Formik
              onSubmit={async (values) => {
                const formData = new FormData();
                formData.append('photo', values.photo);
                formData.append('title', values.title);
                formData.append('description', values.description);
                formData.append('price', values.price);
                fetch(
                  "http://localhost/lp2/api/product/create",
                  { method: 'POST', body: formData, headers: {
                    "Access-Token": userLogged.token
                  } }
                )
                .then((response) => response.json())
                .then((data) => {
                    photoRef.current.value = ''
                    titleRef.current.value = ''
                    descriptionRef.current.value = ''
                    priceRef.current.value = ''
                    titleRef.current.focus()
                    console.log(data)
                    alert(data.message)
                    navigate('/Admin')
                });
              }}
              initialValues={{
                photo: '',
                title: '',
                description: '',
                price: '',
              }}
            >
              {({
                handleSubmit,
                handleChange,
                values,
              }) => (
                <>
                  <h1 className='namep'>Cadastrar Produto</h1>
                  <div className='frente'>
                    <Form noValidate onSubmit={(event) => handleSubmit(event)} className='formca'>
                      <Row className="mb-8">
                        <Form.Group className='fogrup' as={Col} md="12">
                          <Form.Label>Foto</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Foto"
                            name="photo"
                            value={values.photo}
                            ref={photoRef}
                            onChange={handleChange}
                          />
    
                          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group className='fogrup' as={Col} md="12">
                          <Form.Label>Título</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder='Título'
                            name='title'
                            value={values.title}
                            ref={titleRef}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group className='fogrup' as={Col} md="12">
                          <Form.Label>Descrição</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder='Descrição do Produto'
                            name='description'
                            value={values.description}
                            ref={descriptionRef}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Row>
                      <Row>
                        <Form.Group className='fogrup' as={Col} md="12">
                          <Form.Label>Preço</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder='Preço'
                            name='price'
                            value={values.price}
                            ref={priceRef}
                            onChange={handleChange}
                          />
                        </Form.Group>
                      </Row>
                      <Button className='blogar' type="submit">Cadastrar</Button>
                    </Form>
                  </div>
                </>
              )}
            </Formik>
          </div>
        </>
      );
  
  }
  
  export default CadastroProducts