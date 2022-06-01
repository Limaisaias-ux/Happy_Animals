import React from 'react';
import { Formik } from 'formik'; //npm install -S yup
import * as Yup from 'yup';//npm install -S yup
import {Form, InputGroup, Row, Col, Button} from "react-bootstrap";
import Menu from "../components/Menu"

//const { formik } = Formik;

const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    data: Yup.string().required(),
    cpf: Yup.string().required(),
    cidade: Yup.string().required(),
    estado: Yup.string().required(),
    endereco: Yup.string().required(),
    cep: Yup.string().required(),
    senha: Yup.string().required(),
    terms: Yup.bool().required().oneOf([true], 'Aceite os Termos'),
  });

function Cadastro() {
    return (
    <>
    <Menu />
    
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        name: '',
        email: '',
        data: '',
        cpf: '',
        cidade: '',
        estado: '',
        endereco: '',
        cep: '',
        senha: '',
        terms: false,
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>Nome Completo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome Completo"
                name="Name"
                value={values.name}
                onChange={handleChange}
                isValid={touched.name && !errors.name}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="validationFormikdata">
              <Form.Label>D.Nascimento</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="data"
                  aria-describedby="inputGroupPrepend"
                  name="data"
                  value={values.data}
                  onChange={handleChange}
                  isInvalid={!!errors.data}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.data}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="validationFormikcpf">
              <Form.Label>CPF</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="CPF"
                  aria-describedby="inputGroupPrepend"
                  name="cpf"
                  value={values.cpf}
                  onChange={handleChange}
                  isInvalid={!!errors.cpf}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.cpf}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik03">
              <Form.Label>Cidade</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cidade"
                name="cidade"
                value={values.cidade}
                onChange={handleChange}
                isInvalid={!!errors.cidade}
              />

              <Form.Control.Feedback type="invalid">
                {errors.cidade}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>Estado</Form.Label>
              <Form.Control
                type="text"
                placeholder="Estado"
                name="estado"
                value={values.estado}
                onChange={handleChange}
                isInvalid={!!errors.estado}
              />
              <Form.Control.Feedback type="invalid">
                {errors.estado}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="validationFormik05">
              <Form.Label>Cep</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cep"
                name="cep"
                value={values.cep}
                onChange={handleChange}
                isInvalid={!!errors.cep}
              />
              <Form.Control.Feedback type="invalid">
                {errors.cep}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik06">
              <Form.Label>Endereço</Form.Label>
              <Form.Control
                type="text"
                placeholder="Endereço"
                name="endereco"
                value={values.endereco}
                onChange={handleChange}
                isInvalid={!!errors.endereco}
              />

              <Form.Control.Feedback type="invalid">
                {errors.endereco}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="2" controlId='validationFormikpass'>
              <Form.Label>Senha</Form.Label>
              <Form.Control 
              type="text"
              placeholder='Senha'
              name='senha'
              value={values.senha}
              onChange={handleChange}
              isInvalid={!!errors.senha}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              name="terms"
              label="Estou de Acordo com as Condições dos Termos "
              onChange={handleChange}
              isInvalid={!!errors.terms}
              feedback={errors.terms}
              feedbackType="invalid"
              id="validationFormik0"
            />
          </Form.Group>
          <Button type="submit">Criar Cadastro</Button>
        </Form>
      )}
    </Formik>
    
    </>
    );
}


export default Cadastro